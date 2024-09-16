import {Book, User, IBook, IUser} from './models';
import {Library} from './library';

export class LibraryService {
    private users: IUser[] = [];

    addUser(user: IUser): void {
        this.users.push(user);
    }

    borrowBook(user: IUser, book: IBook): void {
        if (!book.isBorrowed) {
            if (this.getUserBooks(user).length < 3) {
                book.borrow();
            } else {
                console.log('User cannot borrow more than 3 books.');
            }
        } else {
            console.log('This book is already borrowed.');
        }
    }

    returnBook(user: IUser, book: IBook): void {
        book.returnBook();
    }

    private getUserBooks(user: IUser): IBook[] {
        // Simulate fetching books borrowed by a user (in a real scenario, you'd store these somewhere)
        return [];
    }
}
