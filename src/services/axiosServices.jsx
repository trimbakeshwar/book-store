import axios from 'axios'
export default class AxiosServices{
   
    Post(url, data , isHeaderRequire){
        return axios.post(url,data, {headers: {Authorization: "Bearer "+localStorage.getItem("Token") }})
    
}
    Get( url , isHeaderRequire){
        return axios.get(url,isHeaderRequire?{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}:undefined)
    }

    Delete(url, isHeaderRequire){
        return axios.delete(url,isHeaderRequire?{headers: {Authorization: "Bearer "+localStorage.getItem("Token") }}:undefined)
    }
    Put(url,data,tokan){
        return axios.put(url,data,tokan)
    }

    Put(url, token){
        return axios.put(url,token)
    }
}