

import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class storeServices {  
    
    addToCart(id ,isHeaderRequire) {
		return Axios.Post(config.url+"Cart?BookId="+id,id,isHeaderRequire);  
    }
    addToWishLists(id,isHeaderRequire){
        return Axios.Post(config.url+"WishList?BookId="+id, id,isHeaderRequire);   
    }
    remove(id,isHeaderRequire){
      return Axios.Delete(config.url+"Cart/"+id,isHeaderRequire); 
    }
    getCartList(isHeaderRequire){
      return Axios.Get(config.url+"Cart/",isHeaderRequire); 
 
    }
    removeFromWishlist(WishListId,isHeaderRequire ){
      
      return Axios.Delete(config.url+"WishList/"+WishListId ,isHeaderRequire); 
    } 
    getWishListList(isHeaderRequire){
      return Axios.Get(config.url+"WishList/",isHeaderRequire ); 
    }
    AddWishListToCart(id,isHeaderRequire){
      return Axios.Post(config.url+"Cart/WishListToCart/"+id,id,isHeaderRequire);  

    }
    SortByAscending(price,orderby,isHeaderRequire){
      return Axios.Get(config.url+"book/Sorting?columnName="+price+"&order="+orderby,isHeaderRequire ); 

    }
     SortByDescending(price,orderby,isHeaderRequire){
      return Axios.Get(config.url+"book/Sorting?columnName="+price+"&order="+orderby,isHeaderRequire ); 

     }

}
export default storeServices;