<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form ref="volunteerForm" :model="workerForm" :rules="ruleLists" :label-width="80" @keydown.enter.native="handleSubmit">
    <FormItem label="姓名" prop="name">
        <Input v-model="workerForm.name" placeholder="请输入姓名"></Input>
    </FormItem>
    <FormItem label="身份证" prop="cardId">
        <Input v-model="workerForm.identity" placeholder="请输入身份证"></Input>
    </FormItem>
    <FormItem label="性别" prop="userSex">
        <RadioGroup v-model="workerForm.isMale">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="出生日期" prop="birth">
      <DatePicker v-model="workerForm.birthday" type="date" placeholder="请选择出生日期" style="width: 200px">
      </DatePicker>
    </FormItem>
    <FormItem label="手机号" prop="phone">
        <Input v-model="workerForm.username" placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
        <Input v-model="workerForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="secondPassword">
        <Input v-model="workerForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button @click="handleSubmit" class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  import util from "../../../util/util";
  export default {
    name: 'workerRegist',
    data () {
      return {
        workerForm: {
          name: "",
          identity: "",
          isMale: "male",
          password: "",
          username: "",
          birthday: "",
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
          ],
          identity: [
            { required: true, message: '身份证号不能为空', trigger: 'blur' }
          ],
          birthday: [
            { required: true, message: '出生日期不能为空', trigger: 'blur', pattern: /.+/}
          ]
        },
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.volunteerForm.validate(async (valid) => {
          if (valid) {
            let data = {
              method: 'post',
              params: this.workerForm,
              url: '/user/createSocial',
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
