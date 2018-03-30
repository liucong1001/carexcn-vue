import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import year from '@/components/year'
import dealer from '@/components/dealer'
import person from '@/components/person'
import month from '@/components/month'
import day from '@/components/day'
import yearOnYear from '@/components/yearOnYear'
import monthOnMonth from '@/components/monthOnMonth'
import exam  from '@/components/exam'
import examDetail from '@/components/examDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: login, meta:{isShow:false,title:'登录'} }, 
    {path: '/chart', name: 'year',component: year,meta:{isShow:true,title:'按年查询'}},
    {path: '/chart/month', name: 'month',component: month,meta:{isShow:true,title:'按月查询'}},
    {path: '/chart/day', name: 'day',component: day,meta:{isShow:true,title:'按天查询'}},
    {path: '/chart/yearOnYear', name: 'yearOnYear',component: yearOnYear,meta:{isShow:true,title:'同比'}},
    {path: '/chart/monthOnMonth', name: 'monthOnMonth',component: monthOnMonth,meta:{isShow:true,title:'环比'}},
    {path: '/dealer', name: 'dealer',component: dealer,meta:{isShow:true,title:'交易明细'}},
    {path: '/exam', name: 'exam',component: exam,meta:{isShow:true,title:'领导审批'}},
    {path: '/exam/detail', name: 'examDetail',component: examDetail,meta:{isShow:true,title:'领导审批明细'}},
    {path: '/person', name: 'person',component: person,meta:{isShow:true,title:'个人中心'}},
  ]
})
