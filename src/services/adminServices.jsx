
import config from "../services/configservices";
import AxiosServices from "../services/axiosServices";
 const Axios = new AxiosServices();
 class adminService {  
    
    AddBooksDetail(data) {
		return Axios.Post(config.url+"Book", data,{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }});  
    }
    deletebook(id){
      return Axios.Delete(config.url+"Book/"+id, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
    }
    getbook(){
      return Axios.Get(config.url+"Book", {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
 
    }
    updateBooksDetail(data,id){
      return Axios.Put(config.url+"Book/"+id,data, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
 
    }
    uploadImage(imageUrl, bookId){
      return Axios.Put(config.url+"Book/InsertImage/"+bookId,imageUrl, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}); 
 
    }
}
export default adminService;