<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form :model="workerForm" :label-width="80">
    <FormItem label="姓名">
        <Input v-model="workerForm.name" placeholder="请输入姓名"></Input>
    </FormItem>
    <FormItem label="身份证">
        <Input v-model="workerForm.cardId" placeholder="请输入身份证"></Input>
    </FormItem>
    <FormItem label="性别">
        <RadioGroup v-model="workerForm.userSex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="出生日期">
      <DatePicker v-model="workerForm.birth" type="date" placeholder="请选择出生日期" style="width: 200px">
      </DatePicker>
    </FormItem>
    <FormItem label="手机号">
        <Input v-model="workerForm.phone" placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem label="密码">
        <Input v-model="workerForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码">
        <Input v-model="workerForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  export default {
    name: 'workerRegist',
    data () {
      return {
        workerForm: {
          name: "",
          cardId: "",
          userSex: "male",
          password: "",
          phone: "",
          birth: "",
        }
      }
    },
    methods: {},
  }
</script>