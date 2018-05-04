<template>
  <div class="index-box">
    <ul class="list">
      <li class="item" v-for="(item, idx) in list" :key="idx">
        <h3 class="title">
          <span
            :class="['tip' ,item.tipName === '置顶' || item.tipName === '精华' ? 'active' : '']"
          >
            {{item.tipName}}
          </span>
          <p class="text">{{item.title}}</p>
        </h3>
        <div class="info">
          <img class="author-avatar"
               v-lazy="item.author.avatar_url"
               @click="to(`/user?name=${item.author.loginname}`)"
          >
          <div class="author-info">
            <span class="name" title="发布人">{{item.author.loginname}}</span>
            <span class="time" title="发布时间">{{item.create_at | time}}</span>
          </div>
          <div class="participation-info">
            <!-- 回复数/查看数 -->
            <span class="num" title="回复/查看">{{item.reply_count}} / {{item.visit_count}}</span>
            <!-- 最新回复时间 -->
            <span class="time" title="最近回复时间">{{item.last_reply_at | time}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getList } from 'api/index'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let status = this.$route.query.status
      if (status === undefined) status = 'all'
      let obj = {
        page: 1,
        tab: status,
        limit: 10
      }
      this.list = []
      this.searchData(obj)
    },
    initBscroll () {
      let wrapper = document.querySelector('.index-box')
      this.scroll = new BScroll(wrapper, {
        probeType: 1
      })
    },
    searchData (obj) {
      // let _this = this
      getList(obj).then(res => {
        // console.log(res)
        if (res.success) {
          for (let item of res.data) {
            let _tip = item.tab
            let _tipName
            if (item.top) {
              _tip = 'top'
            }
            if (item.good) {
              _tip = 'good'
            }
            switch (_tip) {
              case 'top':
                _tipName = '置顶'
                break
              case 'good':
                _tipName = '精华'
                break
              case 'share':
                _tipName = '分享'
                break
              case 'ask':
                _tipName = '提问'
                break
              case 'job':
                _tipName = '招聘'
                break
            }
            let obj = Object.assign(item, {tipName: _tipName})
            this.list.push(obj)
          }
        }
      })
    },
    to (path) {
      if (typeof path !== 'string') return
      this.$router.push(path)
    }
  },
  watch: {
    '$route': 'initData',
    list (n, o) {
      this.initBscroll()
    }
  }
}
</script>

<style scoped>
  .index-box {
    position: fixed;
    width: 100%;
    top: 45px;
    bottom: 0;
    overflow: hidden;
  }
  .index-box .list {
    font-size: 16px;
  }
  .index-box .list .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 15px;
    border-bottom: 1px solid #f0f0f0;
  }
  .index-box .list .item .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .index-box .list .item .title .tip {
    background-color: #e5e5e5;
    color: #999;
    font-size: 12px;
    padding: 5px 5px;
    border-radius: 5px;
    flex: 0 0 auto;
  }
  .index-box .list .item .title .tip.active {
    background-color: rgb(65, 184, 131);
    color: #fff;
  }
  .index-box .list .item .title .text {
    margin: 0 0 0 10px;
    text-align: left;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .index-box .list .item .info {
    margin: 10px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  .index-box .list .item .info .author-avatar {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .index-box .list .item .info .author-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1 1 auto;
    margin: 0 0 0 10px;
    color: #778087;
    font-size: 13px;
  }
  .index-box .list .item .info .author-info .name {
    margin: 0 0 5px 0;
  }
  .index-box .list .item .info .participation-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex: 1 1 auto;
    font-size: 13px;
    color: #778087;
  }
  .index-box .list .item .info .participation-info .num {
    margin: 0 0 5px 0;
  }

</style>
