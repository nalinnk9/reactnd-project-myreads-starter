
export const reducer = (state = {
    isFetching: true,
    books: [{
      id:"",
      shelf: ""
    }],
    query: ""
} , action:any)  => {
    switch(action.type) {
        case 'SET_FETCHING' :
            return {
                ...state,
                isFetching: action.value
            }
            case 'SET_QUERY' :
            return {
                ...state,
                query: action.value
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
            tmpState.isFetching = false;
          return tmpState;
        case 'SEARCH_BOOK' :
            const nState = Object.assign({}, state);
            nState.isFetching = false;
            nState.books = action.books ? action.books : [{}];
            nState.query = action.query;
            return nState;
        default : 
        return state;
    }
}