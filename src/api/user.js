import { baseUrl } from './config'
import axios from 'axios'

const getUser = (name) => {
  let _url = `/user/${name}`

  return axios({
    method: 'get',
    url: baseUrl + _url
  }).then(res => Promise.resolve(res.data)).catch(res => Promise.reject(res.data))
}

export {
  getUser
}
