import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./booksSlice";

function EditBook() {
  const location = useLocation();
  const [formData, setFormData] = useState({ ...location.state });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ ...formData }));
    navigate("/show-books");
  };

  return (
    <div className="update-book">
      <h1>Update Book</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Book Name: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
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

        <button>Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
