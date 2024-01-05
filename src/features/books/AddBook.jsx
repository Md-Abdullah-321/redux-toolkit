import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "./booksSlice";

const init = {
  name: "",
  author: "",
};
function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...init });
  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id: numberOfBooks + 1,
      title: formData.name,
      author: formData.author,
    };

    dispatch(addBooks(book));
    navigate("/show-books");
  };

  return (
    <div className="add-book">
      <h1>Add a Book</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Book Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="author">Author Name: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
