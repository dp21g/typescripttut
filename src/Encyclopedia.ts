import {ReferenceItem} from "./classes";

//when you only have one item to export per file then just use default
//this way you can import them with whatever name you want.
export default class Encyclopedia extends ReferenceItem{
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }    
    
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void{
        console.log(`${this.title} - ${this.year}`);
    }
}
