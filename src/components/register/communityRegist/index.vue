<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form :model="communityForm" :rules="ruleLists" :label-width="80">
    <FormItem label="社区名称" prop="communityName">
        <Input v-model="communityForm.communityName" placeholder="请输入社区名称"></Input>
    </FormItem>
    <FormItem label="社区地址" prop="address">
        <Input v-model="communityForm.address" placeholder="请输入社区地址"></Input>
    </FormItem>
    <FormItem label="负责人姓名" prop="name">
        <Input v-model="communityForm.name" placeholder="请输入负责人姓名"></Input>
    </FormItem>
    <FormItem label="性别" prop="userSex">
        <RadioGroup v-model="communityForm.userSex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="出生日期" prop="birth">
      <DatePicker v-model="communityForm.birth" type="date" placeholder="请选择出生日期" style="width: 200px">
      </DatePicker>
    </FormItem>
    <FormItem label="联系电话" prop="phone">
        <Input v-model="communityForm.phone" placeholder="请输入联系电话"></Input>
    </FormItem>
    <FormItem label="用户名" prop="userName">
        <Input v-model="communityForm.userName" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
        <Input v-model="communityForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="secondPassword">
        <Input v-model="communityForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  export default {
    name: 'communityRegist',
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
        },
        ruleLists: {
          phone: [
            { required: true, message: '联系电话不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '负责人姓名不能为空', trigger: 'blur' }
          ],
          userSex: [
            { required: true, message: '性别不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          secondPassword: [
            { required: true, message: '确认密码不能为空', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          birth: [
            { required: true, message: '出生日期不能为空', trigger: 'blur' }
          ],
          communityName: [
            { required: true, message: '社区名不能为空', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '社区地址不能为空', trigger: 'blur' }
          ]
        },
      }

    },
    methods: {},
  }
</script>
