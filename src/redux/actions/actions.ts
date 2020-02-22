export const addBookToList = (list:any, book: any) => {
   return {
       type: "ADD_BOOK_TO_LIST",
       list,
       book
   }
}

export const deleteBookFromList = (list : any, book: any) => {
    return {
        type: "DELETE_BOOK_FROM_LIST",
        list, 
        book
    }
}
export const addAllBooks = () => {
    return {
        type: "INITIALIZE_BOOKS"
    }
}