<style lang="scss">
  @import '../index.scss';
</style>
<template>
  <Form ref="socialForm" :model="communityForm" :rules="ruleLists" :label-width="80" @keydown.enter.native="handleSubmit">
    <FormItem label="社区名称" prop="communityName">
        <Input v-model="communityForm.name" placeholder="请输入社区名称"></Input>
    </FormItem>
    <FormItem label="社区地址" prop="address">
        <Input v-model="communityForm.address" placeholder="请输入社区地址"></Input>
    </FormItem>
    <FormItem label="负责人姓名" prop="name">
        <Input v-model="communityForm.leaderName" placeholder="请输入负责人姓名"></Input>
    </FormItem>
    <FormItem label="性别" prop="userSex">
        <RadioGroup v-model="communityForm.isMale">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
        </RadioGroup>
    </FormItem>
    <FormItem label="出生日期" prop="birth">
      <DatePicker v-model="communityForm.birthday" type="date" placeholder="请选择出生日期" style="width: 200px">
      </DatePicker>
    </FormItem>
    <FormItem label="联系电话" prop="phone">
        <Input v-model="communityForm.phone" placeholder="请输入联系电话"></Input>
    </FormItem>
    <FormItem label="用户名" prop="userName">
        <Input v-model="communityForm.username" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
        <Input v-model="communityForm.password" placeholder="请输入密码"></Input>
    </FormItem>
    <FormItem label="确认密码" prop="secondPassword">
        <Input v-model="communityForm.secondPassword" placeholder="请再次输入密码进行确认"></Input>
    </FormItem>
    <Button @click="handleSubmit" class="sub-button" type="primary">提交</Button>
  </Form>
</template>
<script>
  import util from "../../../util/util";
  export default {
    name: 'communityRegist',
    data () {
      return {
        communityForm: {
          name: "",
          leaderName: "",
          address: "",
          isMale: "male",
          username: "",
          password: "",
          phone: "",
          birthday: "",
        },
        ruleLists: {
          phone: [
            { required: true, message: '联系电话不能为空', trigger: 'blur' }
          ],
          leaderName: [
            { required: true, message: '负责人姓名不能为空', trigger: 'blur' }
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
          username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          birthday: [
            { required: true, message: '出生日期不能为空', trigger: 'blur', pattern: /.+/}
          ],
          name: [
            { required: true, message: '社区名不能为空', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '社区地址不能为空', trigger: 'blur' }
          ]
        },
      }

    },
    methods: {
      handleSubmit () {
        this.$refs.socialForm.validate(async (valid) => {
          if (valid) {
            let data = {
              method: 'post',
              params: this.communityForm,
              url: '/user/createCommity',
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
