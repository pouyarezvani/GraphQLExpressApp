
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';
import mongoose from 'mongoose';

const app = express();

mongoose.connect( 'mongodb+srv://pouya:1234@cluster0.h7vbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' );

mongoose.connection.once( 'open', () => {
	console.log( 'connected to database' );
} );

app.use( '/graphql', graphqlHTTP( (
	request,
	response,
	graphQLParams
) => ( {
	schema  : schema,
	// rootValue: root,
	graphiql: true
} ) ) );

app.listen( 4000, () => {
	console.log( 'Server is running on port 4000 🚀' )
} );

