

import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class OrderServices {  
    
    orderPlaced(cartId,address,city, pincode,isHeaderRequire) {
		return Axios.Post(config.url+"Order/OrderPlace?CartId="+cartId+"&Address="+address+"&City="+city+"&PinCode="+pincode,pincode,isHeaderRequire);  
    }
    orderCartId(id,isHeaderRequire){
      return Axios.Post(config.url+"/api/Order/",id,id,isHeaderRequire)
    }
}
export default OrderServices;