import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./booksSlice";

function BooksView() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.booksReducer.books);
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="books">
      <div>
        <h2>List of Books Books</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <button onClick={() => handleDeleteBook(id)}>
                        Delete
                      </button>
                      <Link to="/edit-book" state={{ id, title, author }}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BooksView;
