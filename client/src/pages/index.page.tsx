import BookList from '../components/bookList';
import AddBook from '../components/addBook';

export default function Home() {
	return (
		<div id='main'>
			<h1>Pouya Reading List</h1>
			<BookList />
			<AddBook />
		</div>
	)
}
