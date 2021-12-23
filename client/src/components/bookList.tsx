import { useQuery } from '@apollo/client';
import { getBooks } from '../data/queries';

function BookList() {
	const { loading, error, data } = useQuery( getBooks );
	if ( loading ) return <p>Loading...</p>;
	if ( error ) return <p>Error </p>;

	return (
		<div>
			<ul id='book-list'>
				{data.books.map( ( book, index ) =>
					<li key={book.id}>{book.name}</li>,
				)}
			</ul>
		</div>
	);
}

export default BookList;
