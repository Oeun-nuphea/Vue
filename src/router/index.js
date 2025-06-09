// import { createRouter} from 'vue-router'
import { createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../layout/Master.vue'),
    children: [
      {
        path: '',
        name: 'user.list',
        component: () => import('../pages/UserList.vue'),
      },
      {
        path: 'create',
        name: 'user.create',
        component: () => import('../pages/AddUser.vue'),
      }
    ]
  }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;