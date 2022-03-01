import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '@/components/HomeScreen.vue'
import LoginScreen from '@/components/Auth/LoginScreen.vue'
import RegisterScreen from '@/components/Auth/RegisterScreen.vue'
import CategoryScreen from '@/components/Product/CategoryScreen.vue'
import DetailScreen from '@/components/Product/DetailScreen.vue'
import EditScreen from '@/components/Profile/EditScreen.vue'
import MainScreen from '@/components/Profile/MainScreen.vue'

const routes = [
    {
        path: '/',
        name : HomeScreen,
        component : HomeScreen
    },
    {
        path: '/auth/login',
        name : LoginScreen,
        component : LoginScreen
    },
    {
        path: '/auth/register',
        name : RegisterScreen,
        component : RegisterScreen
    },
    {
        path: '/category/:id',
        name : CategoryScreen,
        component : CategoryScreen
    },
    {
        path: '/detail/:id',
        name : DetailScreen,
        component : DetailScreen
    },
    {
        path: '/profile',
        name : MainScreen,
        component : MainScreen
    },
    {
        path: '/profile/setting',
        name : EditScreen,
        component : EditScreen
    }
];
let router = createRouter({
    history: createWebHistory(),
    routes,
})
  
export default router;
