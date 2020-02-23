
export const reducer = (state = {
    isFetching: false,
    books: [{
      id:"",
      shelf: ""
    }]
} , action:any)  => {
    switch(action.type) {
        case 'SET_FETCHING':
            return {
                isFetching: true,
                books: []
            }
        case 'INITIALIZE_BOOKS':
            return {
                isFetching: false,
                books: action.books
            }
        case 'ADD_BOOK_TO_LIST':
            const tmpState = Object.assign({}, state);
            tmpState.books.map((book) => {
                if(book.id === action.book.id) {
                    book.shelf = action.list;
                }
            });
          return tmpState;
        case 'SEARCH_BOOK' :
            const nState = Object.assign({}, state);
            nState.books = action.books ? action.books : [];
            return nState;
        default : 
        return state;
    }
}