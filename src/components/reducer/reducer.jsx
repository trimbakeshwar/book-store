const iState = {
    
    openBook:false,
   
}

const reducer = (state=iState,action)=>{
    if(action.type === 'OPEN_ADD_BOOK_DILOGBOX')
    {
        return {
            ...state,
            openBook:action.payload,
            
        }
    }
    if(action.type === 'CHANGE_password')
    {
        return {
            ...state,
            password:action.payload
            
        }
    }
   
    return state;
}

export default reducer