<template>

    <div class="index">
      <el-input style="width: 80%" v-model="topic" placeholder="题目查询"></el-input><el-button @click="search" style="margin-right: 0px">搜索</el-button>
      <div v-show="cheak">
        <router-link to="/question_bank"><div class="xbox" >
        <img style="width: 360px;height: 180px" src="https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g40rin6vujj30dw08c0sy.jpg">
      </div></router-link>
      <router-link to="/exam"><div class="xbox" >
        <img style="width: 360px;height: 180px" src="https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g40rixexlsj30pc0gggmy.jpg">
      </div></router-link>
      </div>
      <div v-for="row in questionList">
        <div class="xbox2">
          <p>({{row.type}}){{row.id}}.{{row.topic}}</p>
          <div>
            A.{{row.optionA}}
            B.{{row.optionB}}
            C.{{row.optionC}}
            D.{{row.optionD}}
          </div>
          <p>正确答案  ：  {{row.answer}}</p>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "index",
         data() {
          return {
            topic:'',
            cheak:true,
            questionList:[],

          }
        },
      methods:{
      search(){
        this.cheak=false;
      var that =this;
      this.$axios.request({
        url:'http://www.jn-wang.cn/api/v1/SearchView/',
        method:'POST',
        data:{
          topic:this.topic,
        },
        //表示发送的josn请求J
        headers:{
          'Content-Type':'application/json',
        }
      }).then(function (ret) {
        if(ret.data.code ===1000){
          that.questionList = ret.data.data
          console.log(ret.data)
        }else{
          alert(ret.data.error)
        }
      }).catch(function (ret) {
        console.log('出现错误')
      })
    }
  },
    }
</script>

<style scoped>
  .xbox{
    margin: 0 auto;
    margin-top: 3%;
    width: 360px;
    height:180px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .xbox2{
    margin: 0 auto;
    margin-top: 3%;
    width: 360px;
    height:260px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .footer{position: absolute;bottom: 0;left: 0;height: 20px;width: 100%;}
</style>
