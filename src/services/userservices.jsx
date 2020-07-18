import axios from "axios";
import config from "../services/configservices";
 class AxiosService {  
    RegisterData(url,data){
        return axios.post(config.url +"",data);
    }
   
}
export default AxiosService;