
import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class adminService {  
    
    AddBooksDetail(data) {
		return Axios.Post(config.url+"Book", data);  
    }
}
export default adminService;