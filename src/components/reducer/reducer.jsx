const iState = {
    
    openBook:false,
    openupdateBook:false,
    updateBookData:""
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
    
   
    return state;
}

export default reducer