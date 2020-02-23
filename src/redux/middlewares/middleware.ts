 import {getAll, update, search} from './../../BooksAPI';
 
 export const middleware = (state: any) => (next: any) => (action: any) => {
    if(action.type === 'INITIALIZE_BOOKS') {
        console.log("inside the middleware 1");
        getAll().then( data => 
            {
                action.books = data;
                next(action);     
            });
    }
    if(action.type === 'ADD_BOOK_TO_LIST') {
        update(action.book, action.list).then (data => {
            next(action);
        });
    }
    if(action.type === 'SEARCH_BOOK') {
        search(action.query).then(data => {
            action.books = data;
            next(action);
        })
    }
    return next(action);
}