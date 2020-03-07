<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form :model="userForm" :rules="rules" :label-width="80">
    <FormItem label="手机号">
        <Input v-model="userForm.phone" placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem label="姓名">
        <Input v-model="userForm.name" placeholder="请输入负责人姓名"></Input>
    </FormItem>
    <FormItem label="性别">
        <RadioGroup v-model="userForm.userSex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="密码">
        <Input v-model="userForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码">
        <Input v-model="userForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  export default {
    name: 'userRegist',
    props: {
      userNameRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ]}
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]}
      },
      phoneNumRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ]}
      }
    },
  data () {
    return {
        userForm: {
          name: "",
          userSex: "male",
          password: "",
          secondPassword: "",
          phone: "",
        },
      }
    },
    computed: {
      rules () {
        return {
          name: this.userNameRules,
          password: this.passwordRules,
          phone: this.phoneNumRules
        }
      }
    },

    methods: {},
  }
</script>
