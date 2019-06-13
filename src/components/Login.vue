<script src="../../build/webpack.dev.conf.js"></script>
<template>
  <div class="app01">
    <h4>密码修改认证</h4>
    <p>用户性别</p>
       <el-checkbox-group v-model="sex">
         <div>
           <el-checkbox label="男"></el-checkbox>
           <el-checkbox label="女"></el-checkbox>
         </div>
       </el-checkbox-group>
    <p>用户好友名称</p>
       <el-checkbox-group v-model="name">
         <div>
           <el-checkbox label="张三"></el-checkbox>
           <el-checkbox label="李四"></el-checkbox>
           <el-checkbox label="王五"></el-checkbox>
         </div>
       </el-checkbox-group>
    <p>用户年龄</p>
       <el-checkbox-group v-model="age">
         <div>
           <el-checkbox label="18"></el-checkbox>
           <el-checkbox label="28"></el-checkbox>
           <el-checkbox label="38"></el-checkbox>
         </div>
       </el-checkbox-group>
    <div>
    <p><input type="button" @click="dologin" value="登录"/></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      sex: ['男'],
      name: ['张三'],
      age: ['18'],
    }
  },
  methods:{
    dologin(){
      var that =this
      this.$axios.request({
        // url:'http://127.0.0.1:8000/api/v1/auth/',
        url:'http://127.0.0.1:8000/api/v1/RegisteredView/',
        method:'POST',
        data:{
          sex:this.sex,
          name :this.name,
          age :this.age,
        },
        //表示发送的josn请求J
        headers:{
          'Content-Type':'application/json',
        }
      }).then(function (arg) {
        if(arg.data.code ===1000){
          // that.$store.state.token = arg.data.token
          // that.$store.state.username = that.username
          //将值保存进cookies
          that.$store.commit('saveToken',{token:arg.data.token,username:that.username})
          var url = that.$route.query.backUrl
          if(url){
            that.$router.push({path:url})
          }else{
            that.$router.push({path:'/login'})
          }
        }else{
          alert(arg.data.error)
        }
      }).catch(function (arg) {
        console.log('出现错误')
      })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
