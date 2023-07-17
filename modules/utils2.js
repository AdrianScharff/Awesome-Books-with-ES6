export function removeBook(i) {
    this.storeData.splice(i, 1);
    this.updateData();
    this.displayBooks();
  }

export function addNewData(bookTitle, bookAuthor, storeData = bookManager.storeData) {
    const book = {
      title: bookTitle,
      author: bookAuthor,
    };
    storeData.push(book);
    updateData();
    displayBooks();
  }