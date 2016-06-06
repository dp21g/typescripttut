import { sayHello } from './greet';
import { Category } from './enums';
import { Book , DamageLogger, Author, Librarian } from './interfaces';
//another way to import all modules from a file is:
// import * as Interfaces from '.interfaces'; // now you can reference these with Interfaces.Book;
import { UniversityLibrarian , ReferenceItem} from './classes'
import refBook from "./Encyclopedia";

let newRef = new refBook();

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

(function execute() {
    function GetAllBooks(): Book[] {
        let books = [
            { id: 1, title: 'Ulysses', author: 'James Joyce', available: false, category: Category.Fiction },
            { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: true, category: Category.History },
            { id: 3, title: 'I know why the caged bird sings', author: 'Mayaq Angelou', available: true, category: Category.Fiction }
        ];
        return books;
    }

    //log the first available book
    function LogFirstAvailable(books = GetAllBooks()): void {
        //loop through the given books json
        let firstAvail: string = '';

        for (let currentBook of books) {
            if (currentBook.available) {
                firstAvail = currentBook.title;
                break;
            }
        }
    }


    //Get book title by Category. Pass in enum value and return a array of strings
    function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
        console.log('getting books in category:', Category[categoryFilter]);

        const allBooks = GetAllBooks();
        const filteredTitles: string[] = [];

        //loop through and find category matches with the one passed in.
        for (let currentBook of allBooks) {
            if (currentBook.category === categoryFilter) {
                filteredTitles.push(currentBook.title);
            }
        }

        return filteredTitles;

    }

    //Log all the book titles, does not return anything
    function LogBookTitles(titles: string[]): void {
        titles.forEach(element => {
            console.log('title :', element);
        });
    }

    function GetBookById(id: number): any {
        const allBooks = GetAllBooks();
        //return a filter list with the matching id but only the first match.
        return allBooks.filter(book => book.id === id)[0];
    }
    
    function CreateCustomerID(name:string, id:number): string {
        return name + id;
    }



    //when a param not passed in, it uses the default set in the method
    LogFirstAvailable();

    //Use rest array param, Pass in customer name and the book id/s
    function CheckoutBooks(customer:string, ...bookIDs: number[]): string[] {
        console.log('checking out books for :', customer );
        
        let checkedOutbooks: string[] = [];
        
        //loop through the list of books and insert them into a new array
        for (let id of bookIDs){
            let book = GetBookById(id);
            if(book.available) {
                checkedOutbooks.push(book.title);
            }
        }
        
        return checkedOutbooks;
    }
    
    //check out some books
    let myBooks: string[] = CheckoutBooks("Daniel", 1, 2);
    console.log('myBooks:', myBooks);
    
    myBooks.forEach(title => console.log('My books checking out title:', title));


    //initialise the books - add a new book into the array
    const allBooks: any = GetAllBooks();
    LogFirstAvailable(allBooks);

    const histBooks: string[] = GetBookTitlesByCategory(Category.History);
    histBooks.forEach((val, idx, arr) => console.log('idx:', ++idx, " val:", val));

    function PrintBook(book: Book): void {
        console.log(book.title, " by ", book.author);
    }
    
    let logDamage: DamageLogger;
    logDamage = (damage: string) => console.log('Damage reported ', damage);
    logDamage('coffee stains');
    
    let favLibrarian: Librarian = new UniversityLibrarian();
    favLibrarian.name = 'Sharon';
    favLibrarian.assistCustomer('Lynda');
    
    let mobyDick = new ReferenceItem("Moby mate", 1230);
    mobyDick.printItem();
    mobyDick.publisher = 'Random up test';
    console.log('mobyDick.publisher:', mobyDick.publisher);
    
    

    // /*
    // enum is a list of constants
    // You should always use enum when picking from a small list of possible values
    // other eg. Company {EBAY, PAYPAL, GOOGLE, YAHOO}
    // */
    // enum TestCategory { Biography = 1, Poetry, Fiction }; //1, 2, 3

    // /*
    // Arrays
    // */
    // let strArr1: string[] = ['here', 'are', 'string'];
    // let anyArr1: any = [1, true, 'string here'];
    // let myTuple: [number, string] = [25, 'truck'];



})();