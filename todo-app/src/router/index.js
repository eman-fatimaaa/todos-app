import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import TaskComponent from '../components/TaskComponent.vue'
import AboutView from '../views/AboutView.vue'
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
    component: AboutView
  },
  {
    path: '/dashboardview',
    name: 'dashboardview',
    component: DashboardView,
    children: [{
      path: '/taskComponent',
      component: TaskComponent,
    }, {
      path: "/datatable",
      component: DataTable,
    },
    {
      path: "/logscomponent",
      component: LogsComponent,

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
