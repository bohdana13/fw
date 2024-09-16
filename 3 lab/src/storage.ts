import { IBook, IUser } from "./models";

export class Storage {
    getBooks(): IBook[] {
        const books = localStorage.getItem('books');
        return books ? JSON.parse(books) : [];
    }

    getUsers(): IUser[] {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    saveBooks(books: IBook[]): void {
        localStorage.setItem('books', JSON.stringify(books));
    }

    saveUsers(users: IUser[]): void {
        localStorage.setItem('users', JSON.stringify(users));
    }

    clearStorage(): void {
        localStorage.clear();
    }
}