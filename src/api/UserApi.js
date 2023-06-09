import axios from "axios"
const windowEnvConfig = window['runConfig'];

const paramsSerializer = (params) => {
    const Qs = require("qs")
    return Qs.stringify(params, { encode: false })
}
const UserApi = {
    getInfo: (params) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/gamelove-service/user-info`;
        return axios.get(url, {
            params,
            paramsSerializer
        })
    },
  
    update: (data) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/gamelove-service/question-played`;
        return axios.post(
            `${url}`,
            data,
        )
    },
 
   

}
export default UserApi