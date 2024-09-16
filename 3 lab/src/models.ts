export interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    isBorrowed: boolean;
    borrow(): void;
    returnBook(): void;
}

export class Book implements IBook {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public year: number,
        public isBorrowed: boolean = false
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
        } else {
            console.log('This book is already borrowed.');
        }
    }

    returnBook(): void {
        if (this.isBorrowed) {
            this.isBorrowed = false;
        } else {
            console.log('This book is already returned.');
        }
    }
}

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export class User implements IUser {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}