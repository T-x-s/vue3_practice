import { createRouter, createWebHistory } from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/login.vue')
        },
        {
            path: "/:path(.*)",
            name:"404",
            component: () => import('@/views/error/404.vue'),
          },
          {
            path: '/401',
            name:"401",
            component: () => import('@/views/error/401.vue'),
          },
        {
            path: '',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    component: () => import('@/views/dashboard/index.vue'),
                    name: 'Dashboard'
                }
            ]
        },
        {
            path: '/file',
            component: Layout,
            children: [
                {
                    path: '/file/file1/:id',
                    component: () => import('@/views/file/file1/index.vue'),
                    name: 'File1',
                    props: true
                },
                {
                    path: '/file/file2',
                    component: () => import('@/views/file/file2/index.vue'),
                    name: 'File2'
                }
            ]
        }
    ]
})

export default router
