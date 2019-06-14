<template>
  <div id="app">
<div class="box2">
  <p>({{questionList[count].type}}){{count}}.{{questionList[count].topic}}</p>
</div>

<div class="box3">
  <el-checkbox-group  v-show="questionList[count].type==='单选题'" style="margin-top: 20px">
    <el-radio border v-model="radio" label="A">A.{{questionList[count].optionA}}</el-radio></br>
    <el-radio border v-model="radio" label="B">B.{{questionList[count].optionB}}</el-radio></br>
    <el-radio border v-model="radio" label="C">C.{{questionList[count].optionC}}</el-radio></br>
    <el-radio border v-model="radio" label="D">D.{{questionList[count].optionD}}</el-radio></br>
  </el-checkbox-group>
  <div v-show="questionList[count].type==='多选题'" style="margin-top: 20px">
      <el-checkbox border v-model="checkbox" label="A">A.{{questionList[count].optionA}}</el-checkbox></br>
      <el-checkbox border v-model="checkbox" label="B">B.{{questionList[count].optionB}}</el-checkbox></br>
      <el-checkbox border v-model="checkbox" label="C">C.{{questionList[count].optionC}}</el-checkbox></br>
      <el-checkbox border v-model="checkbox" label="D">D.{{questionList[count].optionD}}</el-checkbox></br>
  </div>
  <div v-show="questionList[count].type==='判断题'" style="margin-top: 20px">
      <el-radio border v-model="radio" label="对">对</el-radio>
      <el-radio border v-model="radio" label="错">错</el-radio>
  </div>
</div>

      <div v-show="whether">
          <p>正确答案 ：{{questionList[count].answer}}</p>
        </div>
      <div v-if="questionList[count].answer===radio">
          <p>正确答案 ：{{questionList[count].answer}}</p>
          <el-alert title="答对了" type="success" center show-icon></el-alert>
        </div>
      <el-button v-show="questionList[count].type==='多选题'" @click="check" type="info" round>提交答案</el-button>
      <el-footer class="footer">
        <div style="margin-left: 14%;">
          <el-button @click="decrease" type="info" round>上一题</el-button>
        <el-button @click="nowhether" type="info" icon="el-icon-message" circle></el-button>
        <el-button @click="increase" type="info" round>下一题</el-button>
        </div>

         <div class="block">
          <el-slider v-model="count" :format-tooltip="formatTooltip"></el-slider>
        </div>
      </el-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      radio: null,
      checkbox:[],
      questionList: [],
      count:0,
      whether:false,
    }
  },
  mounted: function () {
    this.initApp()
  },
  computed:{

  },
  watch:{

  },
  methods: {
    nowhether(){
      this.whether=!this.whether
    },
    check(){
      this.radio=this.checkbox.join('')
    },
    formatTooltip(val) {
        return val / 100;
      },
      increase() {
        this.whether=false;
        this.count += 1;
        this.checkbox=[];
        this.radio=null;
        if (this.count > 100) {
          this.count = 100;
        }
      },
      decrease() {
        this.whether=false;
        this.count -= 1;
        this.radio=null;
        this.checkbox=[];
        if (this.count < 0) {
          this.count = 0;
        }
      },
    initApp: function () {
      var that = this
      this.$axios.request({
        url: 'http://www.jn-wang.cn/api/v1/ExaminationView/?format=json',
        // url: this.$store.state.apiList.course,
        method: 'GET'
      }).then(function (ret) {
        if (ret.data.code === 1000) {
          that.questionList = ret.data.data
          console.log(ret.data)
        } else {
          alert("失败")
        }
      }).catch(function (ret) {
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    height: 250px;
  }
  .box1{
    height: 180px;
    margin-top: 80px;
  }
  .box2{
    width: 95%;
    height: 220px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .box3{
    margin-top: 10px;
    height: 200px;
  }
   .footer{position: absolute;bottom: 0;left: 0;height: 20px;width: 100%;}
</style>

