
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { connectToMongoDB } from './config/db';
import schema from './Server/schema/schema';

dotenv.config();
const app = express();
connectToMongoDB();
const PORT = process.env.PORT || 4000;

// Allow cross-origin requests
app.use( cors() );

app.use( process.env.GRAPHQL_PATH, graphqlHTTP( (
	request,
	response,
	graphQLParams
) => ( {
	schema  : schema,
	graphiql: true
} ) ) );

app.listen( PORT, () => {
	console.log( `Server is running on port ${ PORT } 🚀` )
} );

