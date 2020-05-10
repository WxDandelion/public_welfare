<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form ref="accountForm" :model="userForm" :rules="ruleLists" :label-width="80" @keydown.enter.native="handleSubmit">
    <FormItem label="手机号" prop="phone">
        <Input v-model="userForm.username" placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem label="姓名" prop="name">
        <Input v-model="userForm.name" placeholder="请输入负责人姓名"></Input>
    </FormItem>
    <FormItem label="性别" prop="userSex">
        <RadioGroup v-model="userForm.isMale">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="密码" prop="password">
        <Input v-model="userForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="secondPassword">
        <Input v-model="userForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button @click="handleSubmit" class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  import util from "../../../util/util";
  export default {
    name: 'userRegist',
    props: {
    },
    data () {
      return {
        userForm: {
          name: "",
          isMale: "male",
          password: "",
          secondPassword: "",
          username: "",
        },
        ruleLists: {
          username: [
            { required: true, message: '手机号不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          isMale: [
            { required: true, message: '性别不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          secondPassword: [
            { required: true, message: '确认密码不能为空', trigger: 'blur' }
          ]
        },
      }
    },
    computed: {
    },
    methods: {
      handleSubmit () {
        this.$refs.accountForm.validate(async (valid) => {
          if (valid) {
            let data = {
              method: 'post',
              params: this.userForm,
              url: '/user/createUser',
            };
            let res = await util.httpReq(data);
            if (res === 'success') {
              this.$Message.success('成功!');
              this.$router.push({
                path: '/home',
              });
            }
          }
        })
      }
    },
  }
</script>
