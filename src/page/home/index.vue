<style lang="scss" xmlns="http://www.w3.org/1999/html">
  @import './index.scss';
</style>

<template>
  <div class="home">
    <div class="home-web" >
      志愿者服务网
      www.volunteer.com
    </div>
    <div class="home-logo" >
      用心点燃希望,用爱撒播人间
    </div>
    <div class="home-hello" >
      你好，世界!
    </div>
  <div class="home-volunteer">
    <Icon custom="i-icon md-heart-outline" size="24" />
    <Button @click="toVol">申请志愿者</Button>
    <Button @click="needPublish">发布需求</Button>
    <Button @click="blockChain">区块链</Button>
  </div>
    <needPublish></needPublish>
  </div>
</template>
<script>
  import needPublish from '@/components/needPublish';
  export default {
    name: 'Home',
    components: {
          needPublish
    },
    props: {},
    data () {
      return {}
    },
    methods: {
      toVol () {
        this.$router.push('/volunteer');
      },
      needPublish () {
            this.$router.push('/needPublish');
      }

    }
  }

</script>
