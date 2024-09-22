import { expect } from 'chai';
import { Library } from '../src/services/library';
import { describe, it } from 'mocha';
import { Book } from '../src/models/book';

describe('Library', () => {
  it('should add a book correctly', () => {
    const library = new Library();
const book = new Book('Test Author', 'Test Book Name', 2023);
library.add(book);
    expect(library.getAll()).to.have.lengthOf(1);
  });
});
