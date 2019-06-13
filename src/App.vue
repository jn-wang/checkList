<template>
  <div id="app">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
      @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/question_bank">题库</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/exam">考试</router-link></el-menu-item>
      <el-submenu index="4">
        <template slot="title">我的工作台</template>
        <el-menu-item index="4-1"><router-link to="/login">登陆</router-link></el-menu-item>
        <el-menu-item index="4-2"><router-link to="/login">注册</router-link></el-menu-item>
        <el-menu-item index="4-3"><router-link to="/login">注销</router-link></el-menu-item>
        <el-submenu index="4-4">
          <template slot="title"><router-link to="/login">工作台</router-link></template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods:{
    logout(){
      this.$store.commit('cleatToken')
    }
  }
}
</script>

<style>

</style>
