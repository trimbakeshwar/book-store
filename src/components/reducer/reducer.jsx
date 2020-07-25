const iState = {
    
    openBook:false,
    openupdateBook:false,
    updateBookData:"",
    BookDetail:"",
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

    
   
    return state;
}

export default reducer