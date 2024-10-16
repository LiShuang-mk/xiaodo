import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'list',
            component: ListView
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('@/views/CalendarView.vue') // lazy load 
        },
        {
            path: '/clock',
            name: 'clock',
            component: () => import('@/views/ClockView.vue') // lazy load 
        }
    ]
})

export default router
