export function displayBooks() {
  const listOfBooks = document.querySelector('.booksContainer');
  listOfBooks.innerHTML = `
      <ul class="book-ul">
      ${createBooksHTML()}</ul>
  `;
}

export function handleFormSubmit(e) {
  e.preventDefault();
  addNewData(bookManager.titleInput.value, bookManager.authorInput.value);
}

export function handleNavClick(e) {
  e.preventDefault();

  const sectionName = e.target.getAttribute('data-section');

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => section.classList.remove('active'));
  bookManager.navLinks.forEach((link) => link.classList.remove('active'));

  const section = document.getElementById(`${sectionName}-section`);
  section.classList.add('active');
  e.target.classList.add('active');
}

export function init(navLinks = bookManager.navLinks) {
  displayBooks();
  const listSection = document.querySelector('#list-section');
  listSection.classList.add('active');
  navLinks[0].classList.add('active');
}