<style lang="scss">
  @import './index.scss';
</style>
<template>
  <div class="registerBox">
    <h2 class="title">注册</h2>
    <Tabs value="user" :animated="false">
        <TabPane label="普通用户" name="user">
          <userRegist></userRegist>
        </TabPane>
        <TabPane label="社区" name="community">
          <communityRegist></communityRegist>
        </TabPane>
        <TabPane label="社工" name="worker">
          <workerRegist></workerRegist>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import userRegist from '@/components/register/userRegist';
  import communityRegist from '@/components/register/communityRegist';
  import workerRegist from '@/components/register/workerRegist';
  import backButton from '@/components/backButton';
  export default {
    name: "register",
    components: {
      userRegist,
      communityRegist,
      workerRegist,
      backButton
    },
    methods: {
    }
  }
</script>
