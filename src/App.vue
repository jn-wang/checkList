<template>
  <div id="app">
    <router-link to="/">首页</router-link>

    <router-link to="/login">注册</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.commit('cleatToken')
    }
  }
}
</script>

<style>

</style>
