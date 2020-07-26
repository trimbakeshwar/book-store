

import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class storeServices {  
    
    addToCart(id) {
		return Axios.Post(config.url+"Cart", id,{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }});  
    }
  
}
export default storeServices;