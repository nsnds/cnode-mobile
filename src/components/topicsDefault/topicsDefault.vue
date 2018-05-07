<template>
  <div class="topicsDefault" v-if="content.id">
    <h3 class="title">{{content.title}}</h3>
    <div class="baseInfo">
      <img class="author_url" :src="content.author.avatar_url">
      <p class="row1">
        <span class="author-name">{{content.author.loginname}}</span>
        <span class="time">发布于{{content.create_at | time}}</span>
      </p>
      <p class="row2">
        <span class="tip">问答</span>
        <span class="visit-count">{{content.visit_count}}次浏览</span>
      </p>
    </div>
    <div class="markdown-body" v-html="content.content"></div>
    <div class="reply-box">
      <h3 class="title">
        <span>{{content.reply_count}}</span>
        <span>回复</span>
      </h3>
      <ul class="reply-list">
        <li class="item" v-for="(item, index) in content.replies" :key="index">
          <div class="user">
            <img class="avatar_url" :src="item.author.avatar_url">
            <span class="name">{{item.author.loginname}}</span>
            <span class="time">{{item.create_at | time}}</span>
          </div>
          <div class="markdown-body" style="margin-left: 0; margin-right: 0" v-html="item.content"></div>
          <div class="more">
            <span class="good">
              <i class="icon-good"></i>
              <span>{{item.ups.length}}</span>
            </span>
            <span class="reply">
              <i class="icon-code"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import { getTopicsDefault } from 'api/topics'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      content: {}
    }
  },
  computed: {
    ...mapGetters([
      'accessToken'
    ])
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let _accesstoken = this.accesstoken
      let obj = {
        accesstoken: _accesstoken === undefined ? '' : _accesstoken,
        id: this.$route.query.id
      }
      this.searchData(obj)
    },
    searchData (obj) {
      getTopicsDefault(obj).then(res => {
        console.log(res)
        this.content = res.data
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style type="text/css">
.topicsDefault {}
.topicsDefault > .title {
  margin: 15px;
  padding: 10px 5px;
  background-color: #f0f0f0;
  font-size: 18px;
  border-radius: 5px;
  text-align: left;
  font-weight: 600;
}
.topicsDefault .baseInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  font-size: 12px;
  color: #838383;
}
.topicsDefault .baseInfo .author_url {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  flex: 0 0 auto;
}
.topicsDefault .baseInfo .row1 {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 15px;
}
.topicsDefault .baseInfo .row1 .time {
  margin: 10px 0 0 0;
}
.topicsDefault .baseInfo .row2 {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}
.topicsDefault .baseInfo .row2 .tip {
  border-radius: 5px;
  background-color: #80bd01;
  padding: 8px 10px;
  color: #fff;
}
.topicsDefault .baseInfo .row2 .visit-count {
  margin: 5px 0 0 0;
}
.markdown-body {
  margin: 13px 15px 0;
  text-align: left;
  line-height: 1.5em;
  overflow: hidden;
}
.markdown-text ol,
.markdown-text ul {
  padding-left: 2em;
}
.markdown-text p {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.markdown-text blockquote,
.markdown-text dl,
.markdown-text ol,
.markdown-text p,
.markdown-text pre,
.markdown-text table,
.markdown-text ul {
  margin-bottom: 16px;
}
.topicsDefault .reply-box {}
.topicsDefault .reply-box .title {
  border-bottom: 1px solid #d4d4d4;
  border-top: 1px solid #d4d4d4;
  text-align: left;
  padding: 18px 15px;
}
.topicsDefault .reply-box .title span:nth-child(1) {
  color: #42b983;
}
.topicsDefault .reply-box .title span:nth-child(2) {
  font-weight: 600;
}
.topicsDefault .reply-box .reply-list {

}
.topicsDefault .reply-box .reply-list .item {
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #d4d4d4;
  padding: 0 0 10px 0;
}
.topicsDefault .reply-box .reply-list .item .user {
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #838383;
}
.topicsDefault .reply-box .reply-list .item .user .avatar_url {
  flex: 0 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.topicsDefault .reply-box .reply-list .item .user .name {
  flex: 1 1 auto;
  text-align: left;
  margin: 0 0 0 10px;
}
.topicsDefault .reply-box .reply-list .item .more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.topicsDefault .reply-box .reply-list .item .more i {
  margin: 0 2px 0 0;
}
.topicsDefault .reply-box .reply-list .item .more span {
  margin: 0 5px 0 0;
  font-size: 14px;
}
</style>
