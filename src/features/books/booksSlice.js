import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: "JS definitive guide", author: "Devid Flanagan" }, 
        {id : 2, title: "Full Stack - Connecting the dots", author:"HM Nayem"}
    ],
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => void (state.books.push(action.payload)),
        deleteBook: (state, action) => void (state.books = state.books.filter((book) => book.id !== action.payload)),
        updateBook: (state, action) => {
            const isExist = state.books.filter((book) => book.id === action.payload.id);
            if (isExist) {
                state.books.forEach((book) => {
                    if (book.id === action.payload.id) {
                        book.title = action.payload.title;
                        book.author = action.payload.author;
                    }
                })
            }
        }
    }
})

export const { showBooks, addBooks, deleteBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;