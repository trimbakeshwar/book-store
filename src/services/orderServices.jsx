

import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class OrderServices {  
    
    orderPlaced(cartId,address,city, pincode,isHeaderRequire) {
		return Axios.Post(config.url+"Order/OrderPlace?CartId="+cartId+"&Address="+address+"&City="+city+"&PinCode="+pincode,pincode,isHeaderRequire);  
    }

}
export default OrderServices;