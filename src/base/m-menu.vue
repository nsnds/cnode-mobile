<template>
  <transition name="menu">
    <ul class="menu-box" v-if="menuShow">
    <li class="login" v-if="!loginInfo" @click="$router.push('/login')">
      <i class="icon-user"></i>
      <p class="text">登录</p>
    </li>
    <li class="user" v-else @click="$router.push(`/user?name=${loginInfo.loginname}`)">
      <img class="avatar" :src="loginInfo.avatar_url">
      <p class="text">{{loginInfo.loginname}}</p>
    </li>
    <li class="item"
      v-for="(i, x) in list"
      :key="x"
      :class="i.link === Status ? 'active' : ''"
      @click="to(i.link)"
    >
      <i :class="i.icon"></i>
      <p class="text">{{i.text}}</p>
    </li>
    <li class="item comments" v-show="false">
      <i class="icon-comments"></i>
      <p class="text">消息</p>
    </li>
  </ul>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'm-menu',
  data () {
    return {
      list: [
        { text: '全部', icon: 'icon-all', link: 'all' },
        { text: '精华', icon: 'icon-favorite', link: 'good' },
        { text: '分享', icon: 'icon-skip', link: 'share' },
        { text: '问答', icon: 'icon-help', link: 'ask' },
        { text: '招聘', icon: 'icon-lights', link: 'job' }
      ],
      currentListIdx: 0
    }
  },
  computed: {
    Status () {
      return this.$route.query.status
    },
    ...mapGetters([
      'menuShow',
      'loginInfo'
    ])
  },
  methods: {
    to (link) {
      this.$router.push({
        path: `/?status=${link}`
      })
    }
  }
}
</script>

<style scoped>
  .menu-enter-active, .menu-leave-active {
    transition: all 0.3s
  }
  .menu-enter, .menu-leave-to {
    transform: translate3d(-100%, 0, 0)
  }
  .menu-box {
    position: fixed;
    top: 45px;
    bottom: 0;
    left: 0;
    z-index: 3350;
    width: 200px;
    background-color: #fff;
  }
  .menu-box .login {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 10px 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .menu-box .login .icon-user {
    font-size: 25px;
    transform: translateX(-10px);
  }
  .menu-box .login .text {
    font-size: 25px;
  }
  .menu-box .user {
    height: 80px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .menu-box .user .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 30px;
  }
  .menu-box .user .text {
    font-size: 16px;
    margin-left: 9px;
  }
  .menu-box .item {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-box .item.active {
    color: rgb(65, 184, 131);
  }
  .menu-box .item i {
    font-size: 17px;
    transform: translateX(-10px);
  }
  .menu-box .text {
    font-size: 18px;
  }
  .menu-box .comments {
    padding: 10px 0 0 0;
    border-top: 1px solid #e5e5e5;
  }
</style>
