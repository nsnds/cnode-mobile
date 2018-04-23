<template>
  <transition name="fade">
    <div v-if="shadeShow" class="shade-box" @click="tapShade"></div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'menuShow',
      'shadeShow'
    ])
  },
  methods: {
    tapShade () {
      let _menuShow = this.menuShow

      if (_menuShow) {
        this.setShadeShow(false)
        this.setMenuShow(false)
      }
    },
    ...mapMutations({
      setShadeShow: 'SET_SHADE_SHOW',
      setMenuShow: 'SET_MENU_SHOW'
    })
  }
}
</script>

<style>
  .shade-box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3340;

    background-color: rgba(0, 0, 0, 0.4)
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
