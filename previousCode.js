class BookManager {
    constructor() {
      if (localStorage.getItem('AddedBooks') === null) {
        localStorage.setItem('AddedBooks', JSON.stringify([]));
      }
  
      this.storeData = JSON.parse(localStorage.getItem('AddedBooks'));
      this.form = document.querySelector('form');
      this.titleInput = document.querySelector('.title');
      this.authorInput = document.querySelector('.author');
      this.handleNavClick = this.handleNavClick.bind(this);
  
      this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
  
      this.navLinks = document.querySelectorAll('.nav-link');
      this.navLinks.forEach((link) => link.addEventListener('click', this.handleNavClick));
    }
  
    updateData() {
      localStorage.setItem('AddedBooks', JSON.stringify(this.storeData));
    }
  
    createBooks() {
      let books = '';
      for (const book of this.storeData) {
        const isPairIndex = this.storeData.indexOf(book) % 2 === 0;
        const greyClass = isPairIndex ? 'grayBackground' : '';
  
        books += `
          <div class="eachBook ${greyClass}">
          <p> ${book.title} by ${book.author} </p>
          <button class="remove" onClick="bookManager.removeBook(${this.storeData.indexOf(book)})">Remove</button>
          </div>
        `;
      }
  
      return books;
    }
  
    displayBooks() {
      const listOfBooks = document.querySelector('.booksContainer');
      listOfBooks.innerHTML = `
        <ul class="book-ul">
          ${this.createBooks()}</ul>
      `;
    }
  
    removeBook(i) {
      this.storeData.splice(i, 1);
      this.updateData();
      this.displayBooks();
    }
  
    addNewData(bookTitle, bookAuthor) {
      const book = {
        title: bookTitle,
        author: bookAuthor,
      };
      this.storeData.push(book);
      this.updateData();
      this.displayBooks();
    }
  
    handleFormSubmit(e) {
      e.preventDefault();
      this.addNewData(this.titleInput.value, this.authorInput.value);
    }
  
    handleNavClick(event) {
      event.preventDefault();
  
      const sectionName = event.target.getAttribute('data-section');
  
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => section.classList.remove('active'));
      this.navLinks.forEach((link) => link.classList.remove('active'));
  
      const section = document.getElementById(`${sectionName}-section`);
      section.classList.add('active');
      event.target.classList.add('active');
    }
  
    init() {
      this.displayBooks();
      const listSection = document.querySelector('#list-section');
      listSection.classList.add('active');
      this.navLinks[0].classList.add('active');
    }
  }

const bookManager = new BookManager();
bookManager.init();