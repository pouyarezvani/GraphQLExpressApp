
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLInt } from 'graphql';
import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';


const app = express();

const authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
]
const books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 5, name: 'The Two Towers', authorId: 2 },
	{ id: 6, name: 'The Return of the King', authorId: 2 },
	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const BookType = new GraphQLObjectType( {
	name       : 'Book',
	description: 'This represents a book written by an author',
	fields     : () => ( {
		id      : { type: new GraphQLNonNull( GraphQLInt ) },
		name    : { type: new GraphQLNonNull( GraphQLString ) },
		authorId: { type: new GraphQLNonNull( GraphQLInt ) }
	} )
} )

const RootQueryType = new GraphQLObjectType( {
	name       : 'Query',
	description: 'Root Query',
	fields     : () => ( {
		books: {
			type       : new GraphQLList( BookType ),
			description: 'List of books',
			resolve    : () => books
		}
	} )
} );

const schema = new GraphQLSchema( {
	query: RootQueryType
} )


app.use( '/graphql', graphqlHTTP( ( request, response, graphQLParams ) => ( {
	schema  : schema,
	// rootValue: root,
	graphiql: true
} ) ) );

app.listen( 4000, () => {
	console.log( 'Server is running on port 4000 🚀' )
} );

