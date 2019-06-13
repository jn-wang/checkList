import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/Login'
import exam from '@/components/exam'
import question_bank from '@/components/question_bank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/question_bank',
      name: 'question_bank',
      component: question_bank
    },
  ],
  mode:'history'
})
