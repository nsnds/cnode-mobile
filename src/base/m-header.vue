<template>
  <div class="header-box">
    <div class="left" @click="toggle"><i :class="menuShow ? 'icon-menuActive' : 'icon-menu'"></i></div>
    <div class="center">
      <img class="logo" src="../common/image/vue-logo.png">
      <p class="text">全部</p>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'menuShow',
      'shadeShow'
    ])
  },
  mounted () {},
  methods: {
    toggle () {
      let _menuShow = this.menuShow
      let 
      if () {}
    },
    ...mapMutations[{
      setShadeShow: 'SET_SHADE_SHOW',
      setMenuShow: 'SET_MENU_SHOW'
    }]
  }
}
</script>

<style>
  .header-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3350;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
  }
  .header-box .left {
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;
    box-sizing: border-box;
    width: 15%;
    height: 45px;
    flex: 0 0 auto;
  }
  .header-box .left .icon-menu {
    font-size: 20px;
    color: #333;
  }
  .header-box .left .icon-menuActive {
    font-size: 20px;
    color: rgb(65, 184, 131);
  }
  .header-box .center {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
  }
  .header-box .center .logo {
    width: 20px;
    height: 20px;
    transform: translateX(-5px);
  }
  .header-box .center .text {
  }
  .header-box .right {
    width: 15%;
    height: 45px;
    flex: 0 0 auto;
  }
</style>
