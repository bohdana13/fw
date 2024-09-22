"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var library_1 = require("../src/services/library");
var mocha_1 = require("mocha");
var book_1 = require("../src/models/book");
(0, mocha_1.describe)('Library', function () {
    (0, mocha_1.it)('should add a book correctly', function () {
        var library = new library_1.Library();
        var book = new book_1.Book('Test Author', 'Test Book Name', 2023);
        library.add(book);
        (0, chai_1.expect)(library.getAll()).to.have.lengthOf(1);
    });
});
