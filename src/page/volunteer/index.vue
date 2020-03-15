<style lang="scss">
  @import 'index.scss';
</style>

<template>
  <div class="volunteerBox">
    <h2 class="title">志愿者申请</h2>
    <Form :model="volunteerForm" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="volunteerForm.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="身份证">
        <Input v-model="volunteerForm.cardId" placeholder="请输入身份证"></Input>
      </FormItem>
      <FormItem label="手机号">
        <Input v-model="volunteerForm.phone" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="最高学历">
        <Input v-model="volunteerForm.education" placeholder="请输入学历"></Input>
      </FormItem>
      <FormItem label="毕业院校">
        <Input v-model="volunteerForm.school" placeholder="请输入毕业院校"></Input>
      </FormItem>
      <FormItem label="政治面貌">
        <RadioGroup v-model="volunteerForm.politic">
          <Radio label="one">团员</Radio>
          <Radio label="two">预备党员</Radio>
          <Radio label="three">党员</Radio>
          <Radio label="four">党员（保留团籍）</Radio>
          <Radio label="five">其他</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="所在地区">
        <Input v-model="volunteerForm.address" placeholder="请输入所在地区"></Input>
      </FormItem>
      <Button class="sub-button" type="primary">提交</Button><backButton></backButton>
    </Form>
  </div>
</template>

<script>
  import backButton from '@/components/backButton';
    export default {
        name: "volunteer",
        component:{
          backButton
        },
      data () {
        return {
          volunteerForm: {
            name: "",
            cardId: "",
            school: "",
            education: "",
            phone: "",
            politic: "one",
            address: "",
          }
        }
      },
      methods: {},
    }
</script>
