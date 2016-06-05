import {Category} from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;// question mark means optional param
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    //function which accepts a 
    //string as param and returns nothing
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}



export { Book, DamageLogger, Author, Librarian };
