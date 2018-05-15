import { Storage } from 'common/js/common'

const state = {
  // 遮罩是否显示
  shadeShow: false,

  // 侧边菜单是否显示
  menuShow: false,

  // Access Token
  accessToken: Storage('accessToken'),

  // 登录信息
  loginInfo: Storage('loginInfo'),

  // 未读消息长度
  messageCount: 0
}

export default state
