<template>
  <div class="user-box">
    <div class="base">
      <div class="avatar">
        <img :src="userInfo.avatar_url">
      </div>
      <ul class="items">
        <li class="item">
          <span class="title">用户名: </span>
          <span class="text">{{userInfo.loginname}}</span>
        </li>
        <li class="item">
          <span class="title">github: </span>
          <span class="text">{{userInfo.githubUsername}}</span>
        </li>
        <li class="item">
          <span class="title">积分: </span>
          <span class="text">{{userInfo.score}}</span>
        </li>
        <li class="item">
          <span class="title">创建时间: </span>
          <span class="text">{{userInfo.create_at | time}}</span>
        </li>
      </ul>
    </div>
    <div class="more">
      <h2 class="title">最近发布</h2>
      <ul class="content">
        <li v-for="item in userInfo.recent_topics"></li>
      </ul>
      <h2 class="title">最近参与</h2>
      <ul class="content">
        <li v-for="item in userInfo.recent_replies"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUser } from 'api/user'

export default {
  name: 'user',
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters([
      'loginInfo'
    ])
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let name = this.$route.query.name
      this.search(name)
    },
    search (name) {
      getUser(name).then(res => {
        console.log(res)
        this.userInfo = res.data
      }).catch(res => alert(res))
    }
  },
  watch: {
    '$route' (to, from) {
      this.initData()
    }
  }
}
</script>

<style>
.user-box {}
.user-box .base {
  border-bottom: 1px solid #e5e5e5;
  display: flex;

}
.user-box .base .avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 15px;
  width: 105px;
  height: 105px;
}
.user-box .base .avatar img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
}
.user-box .base .items {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px 10px 0;
}
.user-box .base .items .item {
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.user-box .base .items .item .title {
  flex: 0 0 auto;
  width: 30%;
  text-align: right;
}
.user-box .more {
  margin: 10px 0 0 0;
}
.user-box .more > .title {
  font-size: 18px;
  padding: 10px 15px;
  text-align: left;
}
</style>
