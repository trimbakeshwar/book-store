import axios from 'axios'
export default class AxiosServices{
   
    Post(url, data ,token){
        return axios.post(url,data,token)
    
}
    Get( url , token){
        return axios.get(url,token)
    }

    Delete(url, token){
        return axios.delete(url,token)
    }

    Put(url, token){
        return axios.put(url,token)
    }
}