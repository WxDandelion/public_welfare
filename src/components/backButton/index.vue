<template>
    <div>
      <Button class="sub-button" type="primary" @click="$router.back()">返回</Button>
    </div>
</template>

<script>
    export default {
        name: "backButton"
    }
</script>

<style scoped>
  .sub-button {
    display: block;
    margin: 5px auto;
  }
</style>
