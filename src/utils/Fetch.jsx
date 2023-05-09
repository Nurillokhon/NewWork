import axios from "axios"

export const BaseUrl = 'https://633600ed65d1e8ef2666e3bf.mockapi.io/users'
export const api = {
    key: '79e846613e2636bd23fc0f92ef909cd1',
    base_url: 'https://api.openweathermap.org/data/2.5/'
  }

const client = axios.create({
    BaseUrl,
    api,
})

export default client