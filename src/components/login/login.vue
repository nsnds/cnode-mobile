<template>
  <div class="login-box">
    <div class="ipt">
      <input class="needsclick" type="text" placeholder="Access Token" v-model="AccessToken">
    </div>
    <button class="btn" @click="login">登录</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import { login } from 'api/login'

export default {
  name: 'login',
  data () {
    return {
      AccessToken: ''
    }
  },
  computed: {
    ...mapGetters([
      'accessToken',
      'loginInfo'
    ])
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let _loginInfo = this.loginInfo
      let _accessToken = this.accessToken

      // 存在登录信息返回首页
      if (_loginInfo !== undefined) {
        return this.$router.push('/')
      }

      // 会话存在accessToken初始化输入框val
      if (_accessToken) {
        this.AccessToken = this.accessToken
      }
    },
    login () {
      let _accessToken = this.AccessToken

      if (!_accessToken) return alert('请输入Access Token')

      login(_accessToken).then(res => {
        this.setAccessToken(_accessToken)
        this.setLoginInfo(res)
        this.$router.push('/')
      }).catch(res => alert('登录失败!'))
    },
    ...mapMutations({
      setLoginInfo: 'SET_LOGIN_INFO',
      setAccessToken: 'SET_ACCESS_TOKEN'
    })
  }
}
</script>

<style scoped>
  .login-box { padding: 35px 15px 0; }
  .login-box .ipt {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }
  .login-box .ipt input {
    flex: 1 1 auto;
    border: none;
    border-bottom: 1px solid rgb(65, 184, 131);
    outline: none;
    padding: 10px 0;
    font-size: 14px;
  }
  .login-box .btn {
    display: block;
    width: 100%;
    height: 35px;
    margin: 10px 0 0 0;
    background-color: rgb(65, 184, 131);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    outline: none;
  }
</style>
