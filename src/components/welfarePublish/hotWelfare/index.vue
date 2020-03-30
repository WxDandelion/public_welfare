<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form :model="communityForm" :label-width="80">
    <FormItem label="社区名称">
        <Input v-model="communityForm.communityName" placeholder="请输入社区名称"></Input>
    </FormItem>
    <FormItem label="社区地址">
        <Input v-model="communityForm.address" placeholder="请输入社区地址"></Input>
    </FormItem>
    <FormItem label="负责人姓名">
        <Input v-model="communityForm.name" placeholder="请输入负责人姓名"></Input>
    </FormItem>
    <FormItem label="性别">
        <RadioGroup v-model="communityForm.userSex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="出生日期">
      <DatePicker v-model="communityForm.birth" type="date" placeholder="请选择出生日期" style="width: 200px">
      </DatePicker>
    </FormItem>
    <FormItem label="联系电话">
        <Input v-model="communityForm.phone" placeholder="请输入联系电话"></Input>
    </FormItem>
    <FormItem label="用户名">
        <Input v-model="communityForm.userName" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="密码">
        <Input v-model="communityForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码">
        <Input v-model="communityForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  export default {
    name: 'hotWelfare',
    data () {
      return {
        communityForm: {
          communityName: "",
          name: "",
          address: "",
          userSex: "male",
          userName: "",
          password: "",
          phone: "",
          birth: "",
        }
      }
    },
    methods: {},
  }
</script>
