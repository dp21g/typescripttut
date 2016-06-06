"use strict";
var greet_1 = require('./greet');
var enums_1 = require('./enums');
//another way to import all modules from a file is:
// import * as Interfaces from '.interfaces'; // now you can reference these with Interfaces.Book;
var classes_1 = require('./classes');
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
(function execute() {
    function GetAllBooks() {
        var books = [
            { id: 1, title: 'Ulysses', author: 'James Joyce', available: false, category: enums_1.Category.Fiction },
            { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: true, category: enums_1.Category.History },
            { id: 3, title: 'I know why the caged bird sings', author: 'Mayaq Angelou', available: true, category: enums_1.Category.Fiction }
        ];
        return books;
    }
    //log the first available book
    function LogFirstAvailable(books) {
        if (books === void 0) { books = GetAllBooks(); }
        //loop through the given books json
        var firstAvail = '';
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var currentBook = books_1[_i];
            if (currentBook.available) {
                firstAvail = currentBook.title;
                break;
            }
        }
    }
    //Get book title by Category. Pass in enum value and return a array of strings
    function GetBookTitlesByCategory(categoryFilter) {
        console.log('getting books in category:', enums_1.Category[categoryFilter]);
        var allBooks = GetAllBooks();
        var filteredTitles = [];
        //loop through and find category matches with the one passed in.
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var currentBook = allBooks_1[_i];
            if (currentBook.category === categoryFilter) {
                filteredTitles.push(currentBook.title);
            }
        }
        return filteredTitles;
    }
    //Log all the book titles, does not return anything
    function LogBookTitles(titles) {
        titles.forEach(function (element) {
            console.log('title :', element);
        });
    }
    function GetBookById(id) {
        var allBooks = GetAllBooks();
        //return a filter list with the matching id but only the first match.
        return allBooks.filter(function (book) { return book.id === id; })[0];
    }
    function CreateCustomerID(name, id) {
        return name + id;
    }
    //when a param not passed in, it uses the default set in the method
    LogFirstAvailable();
    //Use rest array param, Pass in customer name and the book id/s
    function CheckoutBooks(customer) {
        var bookIDs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bookIDs[_i - 1] = arguments[_i];
        }
        console.log('checking out books for :', customer);
        var checkedOutbooks = [];
        //loop through the list of books and insert them into a new array
        for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
            var id = bookIDs_1[_a];
            var book = GetBookById(id);
            if (book.available) {
                checkedOutbooks.push(book.title);
            }
        }
        return checkedOutbooks;
    }
    //check out some books
    var myBooks = CheckoutBooks("Daniel", 1, 2);
    console.log('myBooks:', myBooks);
    myBooks.forEach(function (title) { return console.log('My books checking out title:', title); });
    //initialise the books - add a new book into the array
    var allBooks = GetAllBooks();
    LogFirstAvailable(allBooks);
    var histBooks = GetBookTitlesByCategory(enums_1.Category.History);
    histBooks.forEach(function (val, idx, arr) { return console.log('idx:', ++idx, " val:", val); });
    function PrintBook(book) {
        console.log(book.title, " by ", book.author);
    }
    var logDamage;
    logDamage = function (damage) { return console.log('Damage reported ', damage); };
    logDamage('coffee stains');
    var favLibrarian = new classes_1.UniversityLibrarian();
    favLibrarian.name = 'Sharon';
    favLibrarian.assistCustomer('Lynda');
    var mobyDick = new classes_1.ReferenceItem("Moby mate", 1230);
    mobyDick.printItem();
    mobyDick.publisher = 'Random text up here';
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
//# sourceMappingURL=app.js.map