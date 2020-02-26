import {getAll, update, search, get} from './../../BooksAPI';

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
const setisFetching = (value:boolean) => {
    return {
        type : "SET_FETCHING",
        value
    }
}

export const setQuery = (value:any) => {
    return {
        type : "SET_QUERY",
        value
    }
}
export const searchBooksAPI = (query: any) => {
    return (dispatch: any) => {
        dispatch(setisFetching(true));
        dispatch(setQuery(query));
        return search(query).then((data) => {
            if(!data.error) {
                dispatch(searchBooks(query, data)) ;
            }

        }).catch(() => {
            dispatch(addAllBooksAPI);
        }).finally( () => {
            dispatch(setisFetching(false));
        })
    }
}
export const addAllBooksAPI = () => {
    return (dispatch: any) => {
        return getAll().then((data) => {
            dispatch(addAllBooks(data));
        }).catch(() => {
            dispatch(setisFetching(false));
        })
    }
}

export const addBookToListAPI = (list: any, book: any) => {
    return (dispatch: any) => {
        dispatch(setisFetching(true));
        return update(book, list).then (data => {
            dispatch(addBookToList(list, book));
        }).finally(()=> {
            dispatch(setisFetching(false));
        });
    }
}