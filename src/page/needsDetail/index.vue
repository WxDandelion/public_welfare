<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="needs-page">
    <div class="activity-tripe">
      <Button type="primary" @click="publish" class="pos_fixed">+发布需求</Button>
<!--        左边-->
      <div class="activitydetail-left">
        <Card style="width:380px;font-size:16px;" class="activity-item" :model="detailList" dis-hover>
          <img :src= "detailList.img" class="activity-img">
          <h3 class="activity-name">{{ detailList.needName }}</h3>
          <div class="activity-day">
            <p>报名截止：</p>
            <Progress :percent="25" hide-info style="width: 65%"/>
            <p>{{ detailList.day }}天</p>
          </div>
          <div class="activity-info">
            <p>{{ detailList.address }}</p>
            <p>参与人数：{{ detailList.numOfPeople }}</p>
          </div>
          <div class="activity-info">
            <p>项目类型：{{ detailList.category }}</p>
            <p>结束时间：{{ detailList.endTime }}</p>
          </div>
          <div class="activity-info">
            <p>联系人：{{ detailList.contact }}</p>
            <p>联系方式：{{ detailList.phone }}</p>
          </div>
          <Button class="sub-button" type="primary">立即报名</Button>
        </Card>
      </div>
      <!--        右边-->
      <div class="activitydetail-info-box">
        <h1 class="activitydetail-info-h1">活动详情</h1>
        <div class="activitydetail-info-detail">{{detailList.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "needsDetail",
    props: {},
    data () {
      return {
        detailList: {
          needName: '活动名称',
          img: 'http://image.zyh365.com/vms/2020/07//1583654851582cac13a16dbbd4937ac8ab0a5261eecba?imageView2/2/w/400/h/300',
          day: '23',
          endTime: '2020-02-20',
          address: 'xx省xx市',
          numOfPeople: '12',
          category: '脱贫攻坚',
          contact: "小明",
          phone: '18820201010',
          content: '我们这个活动，老需要人啦，快来帮帮我们！！'
        }
      }
    },
    methods:{
      publish() {
        this.$router.push('/needPublish');
      }
    }
  }
</script>

