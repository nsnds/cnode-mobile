import { baseUrl } from '@/api/config'
import axios from 'axios'

export const getTopicsDefault = (obj) => {
  const _url = `/topic/${obj.id}`
  const _params = {
    accesstoken: obj.accesstoken,
    mdrender: true
  }

  return axios({
    method: 'get',
    url: baseUrl + _url,
    params: _params
  }).then(res => Promise.resolve(res.data)).catch(res => Promise.reject(res.data))
}
