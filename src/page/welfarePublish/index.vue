<style lang="scss">
  @import './index.scss';
</style>
<template>
  <div class="registerBox">
    <h2 class="title">发布公益</h2>
    <Tabs value="special" :animated="false">
      <TabPane label="特别的公益" name="special">
        <aroundWelfare></aroundWelfare>
      </TabPane>
      <TabPane label="身边的公益" name="around">
        <hometownWelfare></hometownWelfare>
      </TabPane>
      <TabPane label="家乡的公益" name="hometown">
        <hotWelfare></hotWelfare>
      </TabPane>
      <TabPane label="公益热点" name="hot">
        <specialWelfare></specialWelfare>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import aroundWelfare from '@/components/welfarePublish/aroundWelfare';
  import hometownWelfare from '@/components/welfarePublish/hometownWelfare';
  import hotWelfare from '@/components/welfarePublish/hotWelfare';
  import specialWelfare from '@/components/welfarePublish/specialWelfare';
  export default {
    name: "register",
    components: {
      aroundWelfare,
      hometownWelfare,
      hotWelfare,
      specialWelfare,
    },
    methods: {
    }
  }
</script>
