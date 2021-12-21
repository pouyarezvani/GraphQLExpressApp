
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './Server/schema/schema';
import mongoose from 'mongoose';
import { connectToMongoDB } from './config/db';
import dotenv from 'dotenv';
import config from 'config';

dotenv.config();
const app = express();
connectToMongoDB();
const PORT = process.env.PORT || 4000;

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

