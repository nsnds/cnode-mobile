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
      <ul class="default">
        <li v-for="(item, index) in userInfo.recent_topics" :key="index">
          <img class="avatar" :src="item.author.avatar_url">
          <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="row-2">
              <!-- 作者 -->
              <span class="author">{{item.author.loginname}}</span>
              <!-- 最近回复时间 -->
              <span class="time">{{item.last_reply_at}}</span>
            </p>
          </div>
        </li>
      </ul>
      <h2 class="title">最近参与</h2>
      <ul class="default">
        <li v-for="(item, index) in userInfo.recent_replies" :key="index">
          <img class="avatar" :src="item.author.avatar_url">
          <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="row-2">
              <!-- 作者 -->
              <span class="author">{{item.author.loginname}}</span>
              <!-- 最近回复时间 -->
              <span class="time">{{item.last_reply_at}}</span>
            </p>
          </div>
        </li>
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
}
.user-box .more > .title {
  font-size: 16px;
  padding: 15px 15px;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
}
.user-box .more > .default {
  border-bottom: 1px solid #e5e5e5;
}
.user-box .more > .default li {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.user-box .more > .default li:after {
  content: ' ';
  position: absolute;
  bottom: 0;
  border-bottom: 1px dashed #e5e5e5;
  width: 92%;
}
.user-box .more > .default li .avatar {
  width: 45px;
  height: 45px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
}
.user-box .more > .default li .content {
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 10px;
}
.user-box .more > .default li .content .title {
  width: 100%;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.user-box .more > .default li .content .row-2 {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
}
</style>
