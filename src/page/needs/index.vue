<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="needs-page">
    <Button type="primary" @click="publish" class="pos_fixed">+发布需求</Button>
    <!-- start 使用iview UI 组件修改-->
    <div class="activity-tripe">
      <div class="search-itemlist-box">
        <dl class="search-item-dl" id="search-item-class">
          <dt>分类</dt>
          <Radio-group :model.sync="button1" type="button">
            <Radio v-for="item in categoryList" :label="item.label" :key="item.value"></Radio>
          </Radio-group>
        </dl>
      </div>
      <div class="search-orderlist-box">
        <Input :value.sync="searchValue" placeholder="请输入..." style="width: 300px"></Input>
        <Button type="primary" @click="searchNeeds">查询</Button>
      </div>
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
</template>

<script>
  export default {
    name: 'needs',
    data () {
      return {
        button1: '',
        categoryList:[{
          label: '脱贫攻坚',
          value: '1'
        },{
          label: '互帮互助',
          value: '2'
        },{
          label: '疫情防控',
          value: '3'
        }],
        searchValue: '',
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
        this.$router.push('/needsDetail');
      },
      searchNeeds(){
        console.log("活动查询");
      }
    },
    props: {}
  }

</script>
