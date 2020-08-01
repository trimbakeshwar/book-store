import {CART_ID_FOR_PURCHES,
    BOOK_DETAIL,SEARCH_BOOKS ,
    SEARCH_ENABLE,
    ORDER_ID,
    OPEN_ADD_BOOK_DILOGBOX,
    OPEN_UPDATE_BOOK_DILOGBOX,
    OPEN_UPDATE_BOOK_DATA,
    ADMIN_SEARCH} from "../Actions/Actions"

const iState = {
    
    openBook:false,
    openupdateBook:false,
    updateBookData:"",
    BookDetail:"",
    cartData:[],
    SearchData:[],
    searchEnable:false,
    adminsearchData:[],
    adminSearchEnable:false,
    orderID:""

}

const reducer = (state=iState,action)=>{
    if(action.type === OPEN_ADD_BOOK_DILOGBOX)
    {
        return {
            ...state,
            openBook:action.payload,
            
        }
    }
    if(action.type === OPEN_UPDATE_BOOK_DILOGBOX)
    {
        return {
            ...state,
            openupdateBook:action.payload,
            
        }
    }
    if(action.type === OPEN_UPDATE_BOOK_DATA)
    {
        return {
            ...state,
            updateBookData:action.payload,
            
        }
    }
    
    if(action.type === BOOK_DETAIL)
    {
        return {
            ...state,
            BookDetail:action.payload,
            
        }
    }
    if(action.type === CART_ID_FOR_PURCHES)
    {
        return {
            ...state,
            cartData:action.payload,
            
        }
    }
    
    if(action.type === SEARCH_BOOKS)
    {
        return {
            ...state,
            SearchData:action.payload,
           
        }
    }
    if(action.type === SEARCH_ENABLE)
    {
        return {
            ...state,
            searchEnable:action.payload,
           
        }
    }
    if(action.type === ADMIN_SEARCH)
    {
        return {
            ...state,
            adminSearchEnable:action.info,
            adminsearchData:action.payload
        }
    }
    if(action.type === ORDER_ID)
    {
        return {
            ...state,
            orderID:action.payload
        }
    }
    
 
    return state;
}

export default reducer