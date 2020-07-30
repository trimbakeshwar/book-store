const iState = {
    
    openBook:false,
    openupdateBook:false,
    updateBookData:"",
    BookDetail:"",
    cartData:[],
    SearchData:[],
    searchEnable:false,
    adminsearchData:[],
    adminSearchEnable:false
   

}

const reducer = (state=iState,action)=>{
    if(action.type === 'OPEN_ADD_BOOK_DILOGBOX')
    {
        return {
            ...state,
            openBook:action.payload,
            
        }
    }
    if(action.type === 'OPEN_UPDATE_BOOK_DILOGBOX')
    {
        return {
            ...state,
            openupdateBook:action.payload,
            
        }
    }
    if(action.type === 'OPEN_UPDATE_BOOK_DATA')
    {
        return {
            ...state,
            updateBookData:action.payload,
            
        }
    }
    if(action.type === 'BOOK_DETAIL')
    {
        return {
            ...state,
            BookDetail:action.payload,
            
        }
    }
    if(action.type === 'ALL_CART_DETAILS')
    {
        return {
            ...state,
            cartData:action.payload,
            
        }
    }
    
    if(action.type === 'SEARCH_BOOKS')
    {
        return {
            ...state,
            SearchData:action.payload,
           
        }
    }
    if(action.type === 'SEARCH_ENABLE')
    {
        return {
            ...state,
            searchEnable:action.payload,
           
        }
    }
    if(action.type === 'ADMIN_SEARCH')
    {
        return {
            ...state,
            adminSearchEnable:action.payload,
            adminsearchData:action.info
        }
    }
    
 
    return state;
}

export default reducer