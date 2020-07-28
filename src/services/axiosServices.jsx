import axios from 'axios'
export default class AxiosServices{
   
    Post(url, data , isHeaderRequire){
        return axios.post(url,data, isHeaderRequire?{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}:undefined)
    
}
    Get( url , isHeaderRequire){
        return axios.get(url,isHeaderRequire?{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}:undefined)
    }

    Delete(url, isHeaderRequire){
        return axios.delete(url,isHeaderRequire?{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}:undefined)
    }

}