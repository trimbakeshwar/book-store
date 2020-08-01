export const CART_ID_FOR_PURCHES = "CART_ID_FOR_PURCHES";
export const OPEN_ADD_BOOK_DILOGBOX = "OPEN_ADD_BOOK_DILOGBOX"
export const OPEN_UPDATE_BOOK_DILOGBOX = "OPEN_UPDATE_BOOK_DILOGBOX"
export const OPEN_UPDATE_BOOK_DATA = "OPEN_UPDATE_BOOK_DATA"
export const BOOK_DETAIL = "BOOK_DETAIL"
export const SEARCH_BOOKS = "SEARCH_BOOKS"
export const SEARCH_ENABLE = "SEARCH_ENABLE"
export const ADMIN_SEARCH = "ADMIN_SEARCH"
export const ORDER_ID = "ORDER_ID"
export function CartDetails(data){
    return {type:CART_ID_FOR_PURCHES,payload:data}
}
export function openAddDilogbox(data){
    return {type:OPEN_ADD_BOOK_DILOGBOX,payload:data}
}
export function openUpdateDilogbox(data){
    return {type:OPEN_UPDATE_BOOK_DILOGBOX,payload:data}
}
export function openUpdateBookData(data){
    return {type:OPEN_UPDATE_BOOK_DATA,payload:data}
}
export function BookDetails(data){
    return {type:BOOK_DETAIL,payload:data}
}
export function SeartchBookss(data){
    return {type:SEARCH_BOOKS,payload:data}
}
export function SearchEnable(data){
    return {type:SEARCH_ENABLE,payload:data}
}
export function AdminSearch(data,flag){
    return {type:ADMIN_SEARCH,payload:data,info:flag}
}
export function ORDERID(data){
     console.log("action data",data)
    return {
        type:ORDER_ID,payload:data}
}
