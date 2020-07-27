import axios from 'axios'
export default class AxiosServices{
   
    Post(url, data ,ishederRequire, token){
        return axios.post(url,data,token)
    
}
    Get( url , token){
        return axios.get(url,token)
    }

    Delete(url, token){
        return axios.delete(url,token)
    }

}