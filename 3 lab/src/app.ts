// import all modules here
import {Book, IBook, IUser, User} from './models';
import {LibraryService} from './services';

// etc.

import { Library } from './library';
import { Storage } from './storage';
import { Validation } from './validation';
import { Modal } from './modal';

// Main application class
class App {
    private library: Library<IBook>;
    private storage: Storage;
    private validation: Validation;
    private modal: Modal;
    private libraryService: LibraryService;

    constructor() {
        this.library = new Library<IBook>();
        this.storage = new Storage();
        this.validation = new Validation();
        this.modal = new Modal();
        this.libraryService = new LibraryService();

        this.init();
    }

    private init() {
        // Initialize the app, load books and users from storage, set up event listeners
        console.log("App initialized");
        this.loadBooks();
        this.loadUsers();
    }

    private loadBooks() {
        const storedBooks = this.storage.getBooks();
        if (storedBooks) {
            storedBooks.forEach((book: IBook) => this.library.add(book));
        }
    }

    private loadUsers() {
        const storedUsers = this.storage.getUsers();
        if (storedUsers) {
            storedUsers.forEach((user: IUser) => this.libraryService.addUser(user));
        }
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
