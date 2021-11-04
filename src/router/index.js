import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import Login from '../components/login.vue'
import Search from '../components/Search.vue'
import vMainWrapper from '../components/v-main-wrapper.vue'
import vUser from '../components/v-user.vue'
import vCart from '../components/v-cart.vue'

const routes=[
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/wrapper',
        name: 'Wrapper',
        component: vMainWrapper
    },
    
    {
        path: '/cart',
        name: 'Cart',
        component: vCart
        
    },
    {
        path: '/user',
        name: 'User',
        component: vUser,
        props: true
    }
]
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router