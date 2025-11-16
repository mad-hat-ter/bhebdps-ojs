class PrintEditionItem{

    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
    }

    set state(new_state){
        if (new_state < 0) {
            this._state = 0;
        }
        else if (new_state > 100) {
            this._state = 100;
        }
        else{
           this._state = new_state; 
        }    
    }
    
    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem{

    constructor(name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{

    constructor(author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }

}

class NovelBook extends Book{

    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{

    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{

    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{

    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        const foundBook = this.books.find(book => book[type] === value);
        if (foundBook === undefined) {
            return null; 
        } 
        else {
            return foundBook;
        }
    }

    giveBookByName(bookName){
        const foundBook = this.books.find(book => book.name === bookName);
        if (foundBook === undefined) {
            return null; 
        } 
        else {
            this.books.splice(this.books.indexOf(foundBook), 1);
            return foundBook;
        }    
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject){
        if (mark < 2 || mark > 5){
            return null;
        }
        if (this.marks[subject]) {
            this.marks[subject].push(mark);
        } 
        else {
            this.marks[subject] = [mark];
        }
    }

    getAverage(){
        if (Object.keys(this.marks).length===0){
            return 0;
        }
        else{
            const subjects = Object.keys(this.marks);
            return ((subjects.reduce((memo, subjectName) => {return memo + this.getAverageBySubject(subjectName);}, 0))/Object.keys(this.marks).length);
        }   
    }
    getAverageBySubject(subject){
        if (this.marks[subject]) {
            return (this.marks[subject].reduce(function(memo, x) { return memo + x }, 0))/(this.marks[subject].length);
        }
        else {
            return 0;
        }
    }
}