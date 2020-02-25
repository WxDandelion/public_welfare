<!-- 该页面暂时不用 -->
<style scoped>
.layout{
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: auto;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.content {
  height: 64px;
}
</style>
<template>
  <div>
    <navHeader></navHeader>
    <div class="content"></div>
    <router-view></router-view>
  </div>
</template>
<script>
  import navHeader from '@/components/navHeader';
    export default {
      components: {
        navHeader,
      },
      methods: {
        routeTo(e) {
          let routerPath = e.replace(/-/g, '');
          this.$router.push('/' + routerPath);
        },
      }
    }
</script>
