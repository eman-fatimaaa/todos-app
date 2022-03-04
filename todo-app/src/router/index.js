import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import TaskComponent from '../components/TaskComponent.vue'
import DataTable from '../components/DataTable.vue'
import LogsComponent from '../components/LogsComponent.vue'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboardview',
    name: 'dashboardview',
    component: DashboardView,
    children: [{
      path: '/taskComponent',
      component: TaskComponent,
    },{
      path:"/datatable",
      component:DataTable,
    },
  {
    path:"/logscomponent",
    component:LogsComponent,

  }],
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/");

      }
      else {
        next();
      }
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
