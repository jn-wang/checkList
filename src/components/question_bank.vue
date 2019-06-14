<template>
  <div id="app">

        <div  class="box">
          <p>({{questionList[count].type}}){{count}}.{{questionList[count].topic}}</p>
        </div>

        <div class="box1">
        <div>
          <div v-show="questionList[count].type==='单选题'" style="margin-top: 20px">
            <el-radio border v-model="radio" label="A">A.{{questionList[count].optionA}}</el-radio></br>
            <el-radio border v-model="radio" label="B">B.{{questionList[count].optionB}}</el-radio></br>
            <el-radio border v-model="radio" label="C">C.{{questionList[count].optionC}}</el-radio></br>
            <el-radio border v-model="radio" label="D">D.{{questionList[count].optionD}}</el-radio></br>
          </div>
          <div v-show="questionList[count].type==='多选题'" style="margin-top: 20px">
              <el-checkbox border label="A">A.{{questionList[count].optionA}}</el-checkbox></br>
              <el-checkbox border label="B">B.{{questionList[count].optionB}}</el-checkbox></br>
              <el-checkbox border label="C">C.{{questionList[count].optionC}}</el-checkbox></br>
              <el-checkbox border label="D">D.{{questionList[count].optionD}}</el-checkbox></br>
          </div>
          <div v-show="questionList[count].type==='判断题'" style="margin-top: 20px">
              <el-radio border v-model="radio" label="A">对</el-radio>
              <el-radio border v-model="radio" label="B">错</el-radio>
          </div>
          </div>
        </div>

        <div>
          <p>正确答案  ：  {{questionList[count].answer}}</p>
        </div>
      <el-footer class="footer">
        <el-button @click="decrease" type="info" round>上一题</el-button>
        <el-button @click="increase" type="info" round>下一题</el-button>
      </el-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      radio: '1',
      questionList: [],
      count:1,
    }
  },
  mounted: function () {
    this.initApp()
  },
  methods: {
      increase() {
        this.count += 1;
        if (this.count > 370) {
          this.count = 370;
        }
      },
      decrease() {
        this.count -= 1;
        if (this.count < 0) {
          this.count = 0;
        }
      },
    initApp: function () {
      var that = this
      this.$axios.request({
        url: 'http://www.jn-wang.cn/api/v1/QuestionView/?format=json',
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
    width: 95%;
    height: 220px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .box1{
    margin-top: 10px;
    height: 200px;
  }
  .footer{position: absolute;bottom: 0;left: 0;height: 20px;width: 100%;}
</style>

