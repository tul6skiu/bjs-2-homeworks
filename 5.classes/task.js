class PrintEditionItem{
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100; 
        } else {
            this._state = newState; 
        }
    }

    get state() {
        return this._state;
    }

     fix() {
      this.state = this.state * 1.5;  
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount); 
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name,releaseDate,pagesCount) {
        super(name, releaseDate, pagesCount); 
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author); 
        this.type = "novel"; 
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author); 
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    
    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook || null;
    }

    
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) { 
            const book = this.books.splice(bookIndex, 1)[0]; 
            return book;
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }

        
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject] || this.marks[subject].length === 0) {
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        const average = sum / this.marks[subject].length;
        return average;
    }

   
    getAverage() {
        const subjects = Object.keys(this.marks);

    
        if (subjects.length === 0) {
            return 0;
        }

        const totalSum = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

    
        return totalSum / subjects.length;
    }
}