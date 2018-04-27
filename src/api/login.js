import axios from 'axios'
import { baseUrl } from '@/api/config'

export const login = (accessToken) => {
  const _url = '/accesstoken'
  const _data = {
    accesstoken: accessToken
  }

  return axios({
    method: 'post',
    url: baseUrl + _url,
    data: _data
  }).then(res => Promise.resolve(res.data)).catch(res => Promise.reject(res.data))
}
