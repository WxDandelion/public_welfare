<style lang="scss">
  @import './index.scss';
</style>
<template>
  <div class="publishBox">
    <h2>发布需求</h2>
    <Form :model="needForm" :label-width="80">

      <FormItem label="需求名称">
        <Input v-model="needForm.needname" placeholder="请输出需求名称"></Input>
      </FormItem>
      <FormItem label="所在城市">
        <Input v-model="needForm.city" placeholder="请输入所在城市，如xx省xx市"></Input>
      </FormItem>
      <FormItem label="所需帮助">
        <Input v-model="needForm.thing" placeholder="请描述您需要的帮助"></Input>
      </FormItem>
      <FormItem label="联系方式">
        <Input v-model="needForm.phone" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="截止时间">
        <Input v-model="needForm.endtime" placeholder="请输入需求截止时间"></Input>
      </FormItem>
      <Button class="sub-button" type="primary">提交</Button>
    </Form><backButton></backButton>
  </div>

</template>
<script>
  import backButton from '@/components/backButton';
  export default {
    name: 'needPublish',
    components:{
      backButton
    },
    data () {
      return {
        needForm: {
          needname: "",
          city: "",
          thing: "",
          phone: "",
          endtime:""
        }
      }
    },
    methods: {},
  }
</script>
