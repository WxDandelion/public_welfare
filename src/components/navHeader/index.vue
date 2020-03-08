<style scoped>
  .layout-nav{
    width: 100%;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
  .login {
    float: right;
    color: #fff;
  }
</style>
<template>
  <div>
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex: '999'}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="routeTo">
          <div class="layout-nav">
            <div class="login">
              <MenuItem name="login" >
                  登录
              </MenuItem>
              <MenuItem name="register">
                  注册
              </MenuItem>
            </div>
            <MenuItem name="home">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="needs">
              <Icon type="ios-keypad"></Icon>
              公益需求
            </MenuItem>
            <MenuItem name="news">
              <Icon type="ios-analytics"></Icon>
              新闻资讯
            </MenuItem>
          </div>
        </Menu>
      </Header>
        <!--<Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
            Content
        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    -->
    </Layout>
    <loginModal ref="loginBox"></loginModal>
  </div>
</template>
<script>
  import loginModal from "@/components/login";
  export default {
    name: 'navHeader',
    data() {
      return {
        //isLoginVisible: false,
      }
    },
    components: {
      loginModal,
    },
    methods: {
      routeTo(e) {
        if(e == "login") {
          this.$refs.loginBox.showModal();
        } else {
          this.$router.push('/' + e);
        }
      }
    }
  }
</script>