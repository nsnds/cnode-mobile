<template>
  <div v-if="shadeShow" class="shade-box"></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'shadeShow'
    ])
  },
  methods: {
    ...mapMutations({
      setShadeShow: 'SET_SHADE_SHOW'
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
</style>
