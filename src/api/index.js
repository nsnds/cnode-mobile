import { baseUrl } from '@/api/config'
import axios from 'axios'

export const getList = (obj) => {
  const _url = '/topics'
  const _params = {
    page: obj.page,
    tab: obj.tab,
    limit: obj.limit,
    mdrender: false
  }

  return axios({
    method: 'get',
    url: baseUrl + _url,
    params: _params
  }).then(res => Promise.resolve(res.data)).catch(res => Promise.reject(res.data))
}
