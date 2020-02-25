import {getAll, update, search} from './../../BooksAPI';

export const addBookToList = (list:any, book: any) => {
   return {
       type: "ADD_BOOK_TO_LIST",
       list,
       book
   }
}
export const addAllBooks = (books : any) => {
    return {
        type : "INITIALIZE_BOOKS",
        books
    }
}
export const searchBooks = (query: any, books: any) => {
   return {
       type: "SEARCH_BOOK",
       books,
       query
   }
}
const catchError = () => {
    return {
        type : "ERROR"
    }
}
export const searchBooksAPI = (query: any) => {
    return (dispatch: any) => {
        return search(query).then((data) => {
            if(!data.error) {
                dispatch(searchBooks(query, data)) ;
            }
        }).catch(() => {
            alert("an error occured");
            dispatch(addAllBooksAPI);
        })
    }
}
export const addAllBooksAPI = () => {
    return (dispatch: any) => {
        return getAll().then((data) => {
            dispatch(addAllBooks(data));
        })
    }
}

export const addBookToListAPI = (list: any, book: any) => {
    return (dispatch: any) => {
        return update(book, list).then (data => {
            dispatch(addBookToList(list, book));
        });
    }
}