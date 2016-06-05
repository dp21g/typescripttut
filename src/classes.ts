import {Book, DamageLogger, Author, Librarian} from './interfaces';

class UniversityLibrarian implements Librarian {
    name:string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name, ' is assisting ', custName);
    }
}


class ReferenceItem {
    
    private _publisher: string;
    //static stores data specific to this class
    //has to be referenced ReferenceItem.department
    static department: string = "Research";
        
    constructor(public title: string, private year:number){
        console.log('Creating a new ReferenceItem');
    }
    
    printItem(): void{
        console.log(`${this.title} was published in ${this.year}.`);
        console.log('static department:', ReferenceItem.department);
            
}
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(value: string) {
        this._publisher = value;
    }
    
    
}
export{ UniversityLibrarian , ReferenceItem}
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

