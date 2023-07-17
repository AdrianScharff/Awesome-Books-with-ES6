export class BookManager {
    constructor() {
      if (localStorage.getItem('AddedBooks') === null) {
        localStorage.setItem('AddedBooks', JSON.stringify([]));
      }
  
      this.storeData = JSON.parse(localStorage.getItem('AddedBooks'));
      this.form = document.querySelector('form');
      this.titleInput = document.querySelector('.title');
      this.authorInput = document.querySelector('.author');
  
      this.form.addEventListener('submit', handleFormSubmit);
  
      this.navLinks = document.querySelectorAll('.nav-link');
      this.navLinks.forEach((link) => link.addEventListener('click', handleNavClick));
    }
  }