import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooks = gql` 
	{	
		books {
			name
			id
		} 
	}
`

export { getAuthorsQuery, getBooks };
