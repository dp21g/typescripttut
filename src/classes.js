"use strict";
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name, ' is assisting ', custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log('static department:', ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (value) {
            this._publisher = value;
        },
        enumerable: true,
        configurable: true
    });
    //static stores data specific to this class
    //has to be referenced ReferenceItem.department
    ReferenceItem.department = "Research";
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
/*
class Author {
    name: string; //
    constructor(authorName: string) {
        name = authorName;
    }
}

the code above is the same as the one below with less code

class Author {
    // public name tells the class that you want
    // a property same as the parameter
    constructor(public name: string){}
}

static properties let you store data specific to the class itself
it cannot be used in a new instance of a class.

static description: string = "this is done by Library class"

you can only access it by Library.description

*/
//# sourceMappingURL=classes.js.map