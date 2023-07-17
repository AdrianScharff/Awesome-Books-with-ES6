import { BookManager } from "./modules/bookManager.js";
import { updateData, createBooksHTML} from "./modules/utils.js";
import { displayBooks, handleFormSubmit, handleNavClick, init } from "./modules/dom.js";
import {removeBook, addNewData} from "./modules/utils2.js"

const bookManager = new BookManager();
bookManager.init();




