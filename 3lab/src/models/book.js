"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(author, bookName, releaseYear) {
        this.author = author || '';
        this.bookName = bookName || '';
        this.releaseYear = releaseYear || 0;
        this.borrowed = false;
        this.id = new Date().getTime();
        this.borrowedBy = undefined;
    }
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getBookName = function () {
        return this.bookName;
    };
    Book.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.represent = function () {
        var str = "ID: ".concat(this.id, " - ").concat(this.bookName, " by ").concat(this.author, " (").concat(this.releaseYear, "). ").concat(this.borrowedBy ? " Borrowed By: ".concat(this.borrowedBy) : '');
        console.log(str);
        return str;
    };
    Book.prototype.getFullName = function () {
        return "ID: ".concat(this.id, " - ").concat(this.bookName, " by ").concat(this.author, " (").concat(this.releaseYear, ").");
    };
    return Book;
}());
exports.Book = Book;
