import { Storage } from 'common/js/common'
import * as types from './mutation-types'

const mutations = {
  [types.SET_SHADE_SHOW] (state, flag) {
    state.shadeShow = flag
  },
  [types.SET_MENU_SHOW] (state, flag) {
    state.menuShow = flag
  },
  [types.SET_ACCESS_TOKEN] (state, str) {
    Storage('accessToken', str)
    state.accessToken = str
  },
  [types.SET_LOGIN_INFO] (state, obj) {
    Storage('loginInfo', obj)
    state.loginInfo = obj
  }
}

export default mutations
