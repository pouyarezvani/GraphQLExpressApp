
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

const app = express();

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

