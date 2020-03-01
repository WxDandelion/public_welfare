<style lang="scss">
  @import '/index.scss';
</style>
<template>
  <Form :model="needForm" :label-width="80">
    <FormItem label="所在城市">
      <Input v-model="needForm.city" placeholder=""></Input>
    </FormItem>
    <FormItem label="医院名称">
      <Input v-model="needForm.hospital" placeholder=""></Input>
    </FormItem>
    <FormItem label="所需物资">
      <Input v-model="needForm.thing" placeholder=""></Input>
    </FormItem>
    <FormItem label="物资名称">
      <Input v-model="userForm.name" placeholder=""></Input>
    </FormItem>
    <FormItem label="物资数量">
      <Input v-model="userForm.amount" placeholder=""></Input>
    </FormItem>
    <Button class="sub-button" type="primary">提交</Button>
    <Button class="sub-button" type="primary">取消</Button>
  </Form>
</template>
<script>
    export default {
        name: 'needPubish',
        data () {
            return {
                needForm: {
                    city: "",
                    hospital: "",
                    thing: "",
                    name: "",
                    amount:""
                }
            }
        },
        methods: {},
    }
</script>
