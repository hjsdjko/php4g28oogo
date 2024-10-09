import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import jianglihuodong from '@/views/modules/jianglihuodong/list'
    import examquestion from '@/views/modules/examquestion/list'
    import xuexikecheng from '@/views/modules/xuexikecheng/list'
    import jifenduihuan from '@/views/modules/jifenduihuan/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import discusskechengxinxi from '@/views/modules/discusskechengxinxi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import xuexijindu from '@/views/modules/xuexijindu/list'
    import forum from '@/views/modules/forum/list'
    import systemintro from '@/views/modules/systemintro/list'
    import kechengfenlei from '@/views/modules/kechengfenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import discussjianglihuodong from '@/views/modules/discussjianglihuodong/list'
    import xuexiziliao from '@/views/modules/xuexiziliao/list'
    import examquestionbank from '@/views/modules/examquestionbank/list'
    import goumaikecheng from '@/views/modules/goumaikecheng/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/jianglihuodong',
        name: '奖励活动',
        component: jianglihuodong
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/xuexikecheng',
        name: '学习课程',
        component: xuexikecheng
      }
      ,{
	path: '/jifenduihuan',
        name: '积分兑换',
        component: jifenduihuan
      }
      ,{
	path: '/exampaper',
        name: '考试评估管理',
        component: exampaper
      }
      ,{
	path: '/storeup',
        name: '我的收藏',
        component: storeup
      }
      ,{
	path: '/discusskechengxinxi',
        name: '课程信息评论',
        component: discusskechengxinxi
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/xuexijindu',
        name: '学习进度',
        component: xuexijindu
      }
      ,{
	path: '/forum',
        name: '互动交流',
        component: forum
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/kechengfenlei',
        name: '课程分类',
        component: kechengfenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/exampaperlist',
        name: '考试评估列表',
        component: exampaperlist
      }
      ,{
	path: '/discussjianglihuodong',
        name: '奖励活动评论',
        component: discussjianglihuodong
      }
      ,{
	path: '/xuexiziliao',
        name: '学习资料',
        component: xuexiziliao
      }
      ,{
	path: '/examquestionbank',
        name: '试题库管理',
        component: examquestionbank
      }
      ,{
	path: '/goumaikecheng',
        name: '购买课程',
        component: goumaikecheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
