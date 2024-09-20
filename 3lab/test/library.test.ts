import { expect } from 'chai';
import {Library} from "/Labs/3 course/1 semester/frameworks/3lab/src/services/library";
import {Book} from "/Labs/3 course/1 semester/frameworks/3lab/src/models/book";

describe('Library', () => {
    it('should add a book', () => {
        const library = new Library<Book, number>();
const book = new Book('Author Name', 'Book Title', 2024); 
library.add(book);
expect(library.getAll()).to.have.lengthOf(1);
    });
});
