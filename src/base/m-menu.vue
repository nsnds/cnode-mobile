<template>
  <ul class="menu-box" v-if="menuShow">
    <li class="login">
      <i class="icon-user"></i>
      <p class="text">登录</p>
    </li>
    <li class="item" v-for="(i, x) in list" :key="x">
      <i :class="i.icon"></i>
      <p class="text">{{i.text}}</p>
    </li>
    <li class="item comments">
      <i class="icon-comments"></i>
      <p class="text">消息</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'm-menu',
  data () {
    return {
      list: [
        { text: '全部', icon: 'icon-all' },
        { text: '精华', icon: 'icon-favorite' },
        { text: '分享', icon: 'icon-skip' },
        { text: '问答', icon: 'icon-help' },
        { text: '招聘', icon: 'icon-lights' }
      ],
      currentListIdx: 0
    }
  },
  computed: {
    ...mapGetters([
      'menuShow'
    ])
  },
  methods: {
    to () {
    }
  }
}
</script>

<style scoped>
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
  .menu-box .item {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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
