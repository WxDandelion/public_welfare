<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div>
    <div class="needBox">
      <Button type="primary" >+发布需求</Button>
          <needPublish></needPublish>
    </div>
  </div>
</template>
<script>
    import needPublish from '@/components/needPublish';
  export default {
    name: 'needs',
      components: {
          needPublish
      },
      methods:{},
    props: {},
    data () {
      return {}
    }
  }

</script>
