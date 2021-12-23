import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { getAuthorsQuery } from '../data/queries';



export default function AddBook() {
	const { loading, error, data } = useQuery( getAuthorsQuery );
	
	const [ name, setName ] = useState( '' );
	const [ genre, setGenre ] = useState( '' );
	const [ authorId, setAuthorId ] = useState( '' );
	
	const displayAuthors = () => {
		if ( loading ) return <option disabled>Loading...</option>;
		if ( error ) return <option disabled>Error Loading authors</option>;
		if ( data ) {
			const { authors } = data;
			return authors.map( ( author, index ) => {
				return <option key={index} value={author.id}>{author.name}</option>;
			} )
		}
	}
	
	const handleSubmit = ( e ) =>{
        e.preventDefault();
        console.log( name, genre, authorId );
    }

	return (
		<form id='add-book'>
			<div className='field'>
				<label>Book Name</label>
				<input type='text' />
			</div>

			<div className='field'>
				<label>Genre</label>
				<input type='text' />
			</div>

			<div className='field'>
				<label>Author</label>
				<select>
					<option>Select author</option>
					{displayAuthors()}
				</select>
			</div>

			<button>+</button>

		</form>
	)
}
