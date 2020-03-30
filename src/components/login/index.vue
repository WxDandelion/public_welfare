<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div>
    <Modal
      width="400px"
      v-model="isLoginVisible"
      title="登录"
      footer-hide
      @on-cancel="closeModal">
      <div class="loginForm">
        <Form ref="loginForm" :model="loginForm">
          <FormItem prop="userName">
            <Input v-model="loginForm.phone" placeholder="请输入用户名/手机号">
              <span slot="prepend">
                <Icon :size="16" type="ios-person"></Icon>
              </span>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="md-lock"></Icon>
              </span>
            </Input>
          </FormItem>
          <Button @click="handleSubmit" type="primary" long>登录</Button>
          <p>没有账号？去<a @click="routeTo">注册</a></p>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'loginModal',
    data() {
      return {
        isLoginVisible: false,
        loginForm: {
          phone: "",
          password: "",
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$router.push('/myWelfare');
      },
      routeTo() {
        this.$router.push('/register');
      },
      closeModal() {
        this.isLoginVisible = false;
      },
      showModal() {
        this.isLoginVisible = true;
      }
    }
  }
</script>
