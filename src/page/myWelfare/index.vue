<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="needs-page">
    <div class="activity-tripe">
<!--        左边-->
      <div class="activitydetail-left">
        <Card style="width:380px;font-size:16px;" class="activity-item-info" :model="detailList" dis-hover>
          <img :src= "detailList.img" class="activity-img">
          <h3 class="activity-name">{{ detailList.volunteerName }}</h3>

          <div class="activity-info">
            <p>地址：{{ detailList.address }}</p>
            <p>性别：{{ detailList.sex }}</p>
          </div>
          <div class="activity-info">
            <p>发起公益数量：{{ detailList.numOfPublish }}</p>
            <p>已加入公益数量：{{ detailList.numOfJoin }}</p>
          </div>
          <div class="activity-info">
            <p>真实姓名：{{ detailList.contact }}</p>
            <p>联系方式：{{ detailList.phone }}</p>
          </div>
        </Card>
      </div>
      <!--        右边-->
      <div class="activitydetail-info-box">
        <template>
          <Tabs active-key="key1">
            <Tab-pane label="发布公益" key="key1" >
              <Button type="info" class="button-publish" @click="publish">发布公益</Button>
            </Tab-pane>
            <Tab-pane label="已加入的公益" key="key2">
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
            </Tab-pane>
          </Tabs>
        </template>
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
          volunteerName: '志愿者昵称',
          img: 'http://image.zyh365.com/vms/2019/56//1555037808271202608f08a9d4d4883e83443790f6ec8?imageView2/2/w/100/h/100',
          sex: '男/女/未知',
          birthday: '1990-02-20',
          address: 'xx省xx市',
          numOfPublish: '1',
          numOfJoin: '2',
          contact: "小明",
          phone: '18820201010',
          content: '我们这个活动，老需要人啦，快来帮帮我们！！'
        },
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
        },{
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
        this.$router.push('/welfarePublish');
      },
      toDetailPage() {
        console.log("aaaa");
        // 跳转详情页
        // 从e中取对应item的id,拼接链接，跳转
        this.$router.push('/needsDetail');
      }
    }
  }
</script>

