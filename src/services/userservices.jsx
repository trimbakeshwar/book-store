import axios from "axios";
import config from "../services/configservices";
 class AxiosService {  
    RegisterData(data){
        return axios.post(config.url +"User/Registration",data);
    }
    LoginData(data){
        return axios.post(config.url +"User/Login",data);
    }
   
}
export default AxiosService;