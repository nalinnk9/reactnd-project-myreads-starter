export const addBookToList = (list:any, book: any) => {
   return {
       type: "ADD_BOOK_TO_LIST",
       list,
       book
   }
}
export const addAllBooks = () => {
    return {
        type: "INITIALIZE_BOOKS",
        books: []
    }
}
export const searchBooks = () => {
    return {
        type : "SEARCH_BOOK",
        books: []
    }
}