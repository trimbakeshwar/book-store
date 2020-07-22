
import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class adminService {  
    
    AddBooksDetail(data) {
		return Axios.Post(config.url+"Book", data,{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }});  
    }
    deletebook(id){
      return Axios.Post(config.url+"Book"+id, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
    }
}
export default adminService;