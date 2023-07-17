export function updateData(storeData = bookManager.storeData) {
  localStorage.setItem('AddedBooks', JSON.stringify(storeData));
}

export function createBooksHTML(storeData = bookManager.storeData) {
  let booksHTML = '';
  for (const book of storeData) {
      const isPairIndex = storeData.indexOf(book) % 2 === 0;
      const greyClass = isPairIndex ? 'grayBackground' : '';

      booksHTML += `
      <div class="eachBook ${greyClass}">
      <p> ${book.title} by ${book.author} </p>
      <button class="remove" onClick="removeBook(${storeData.indexOf(book)})">Remove</button>
      </div>
      `;
  }

  return booksHTML;
}