import axios from "axios";
import config from "../services/configservices";
 class AxiosService {  
    RegisterData(data){
        return axios.post(config.url +"",data);
    }
    LoginData(data){
        return axios.post(config.url +"",data);
    }
   
}
export default AxiosService;