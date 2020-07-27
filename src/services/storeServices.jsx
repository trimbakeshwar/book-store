

import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class storeServices {  
    
    addToCart(id , ishederRequire) {
		return Axios.Post(config.url+"Cart?BookId="+id,id,ishederRequire,{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }});  
    }
    addToWishLists(id){
        return Axios.Post(config.url+"WishList?BookId="+id, id,{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }});   
    }
    remove(id){
      return Axios.Delete(config.url+"Cart/"+id, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
    }
    getCartList(){
      return Axios.Get(config.url+"Cart/", {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
 
    }
}
export default storeServices;