<style lang="scss" xmlns="http://www.w3.org/1999/html">
  @import './index.scss';
</style>

<template>
  <div>
    这里是首页yoyoyoyoy<br>
    <Button @click="toVol">申请成为志愿者</Button>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    props: {},
    data () {
      return {}
    },
    methods: {
      toVol () {
        this.$router.push('/volunteer');
      }
    }
  }

</script>
