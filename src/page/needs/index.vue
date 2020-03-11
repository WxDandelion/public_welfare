<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="needs-page">
    <div class="needBox">
      <Button type="primary" @click="publish" class="pos_fixed">+发布需求</Button>
      <!-- start 使用iview UI 组件修改-->
      <div class="activity-tripe">
        <form id="activity-search-form" method="post">
          <div class="search-itemlist-box">
            <dl class="search-item-dl" id="search-item-class">
              <dt>分类</dt>
              <div class="search-item-dd-box">
                <dd onclick="classItemClick(this)" val="">全部</dd>
                <dd onclick="classItemClick(this)" val="15805286861818e03887bf421416cb6b681192995714f">疫情防控</dd>
                <dd onclick="classItemClick(this)" val="15306880417639f1b4348c72c49899ab96f324a42e518">脱贫攻坚</dd>
                <input id="category" name="category" type="hidden" onchange="searchNow()">
              </div>
            </dl>
          </div>
          <div class="search-orderlist-box">
            <input name="search_title" class="all-search-input" id="search-activity-input" onchange="searchNow()" placeholder="搜索活动..." style="width:328px;margin-right:20px;" type="text">
            <button class="all-btn" type="button" style="width:100px;">搜索</button>
            <input style="display:none;">
          </div>
        </form>
        <!-- end -->
        <!-- 公益活动card -->
        <div class="activity-box">
          <Card class="activity-item" v-for="(item,i) in activities" :key="i">
            <div @click="toDetailPage">
                <img :src= "item.img" class="activity-img">
                <h3 class="activity-name">{{ item.name }}</h3>
                <div class="activity-day">
                  <p>报名截止：</p>
                  <Progress :percent="25" hide-info style="width: 65%"/>
                  <p>{{ item.day }}天</p>
                </div>
                <div class="activity-info">
                  <p>{{ item.address }}</p>
                  <p>参与人数：{{ item.numOfPeople }}</p>
                  <p>浏览量：{{ item.views }}</p>
                </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'needs',
    data () {
      return {
        activities: [{
          id: '111',
          img: 'http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300',
          name: '活动名称',
          day: '23',
          numOfPeople: '12',
          views: '6',
          address: 'xx省xx市',
        }, {
          id: '111',
          img: 'http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300',
          name: '活动名称',
          day: '23',
          numOfPeople: '12',
          views: '6',
          address: 'xx省xx市',
        }, {
          id: '111',
          img: 'http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300',
          name: '活动名称',
          day: '23',
          numOfPeople: '12',
          views: '6',
          address: 'xx省xx市',
        }, {
          id: '111',
          img: 'http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300',
          name: '活动名称',
          day: '23',
          numOfPeople: '12',
          views: '6',
          address: 'xx省xx市',
        }]
      }
    },
    methods:{
      publish() {
        this.$router.push('/needPublish');
      },
      toDetailPage() {
        console.log("aaaa");
        // 跳转详情页
        // 从e中取对应item的id,拼接链接，跳转
        this.$router.push('/');
      }
    },
    props: {}
  }

</script>
