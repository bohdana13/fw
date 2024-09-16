import { IBook, IUser } from "./models";

export class Validation {
    static validateBook(book: IBook): boolean {
        if (!book.title || !book.author || isNaN(book.year) || book.year.toString().length !== 4) {
            console.error('Invalid book data');
            return false;
        }
        return true;
    }

    static validateUser(user: IUser): boolean {
        if (!user.name || !user.email || isNaN(user.id)) {
            console.error('Invalid user data');
            return false;
        }
        return true;
    }
}