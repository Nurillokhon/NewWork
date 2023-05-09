import FetchData from './Fetch'
import { api } from './Fetch'
class UserData {
    async getUser(props) {
        console.log("props keldi iiiii " + props);
        let mass = FetchData.get(`https://davlatlar.herokuapp.com/${props !== "en" ? props : ""}`)
            .then(ress => {
                return ress.data
            })
            .catch(e => {
                return JSON.stringify(e)
            })

        return mass
    }

    async getweather(curr) {
        let weather = FetchData.get(`${api.base_url}weather?q=${curr}&units=metric&APPID=${api.key}`)
            .then(res => {
                return res.data
            })
            .catch(e => {
                return JSON.stringify(e)
            })

        return weather
    }
  

}

export default new UserData()