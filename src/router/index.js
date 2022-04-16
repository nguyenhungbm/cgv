import { createRouter, createWebHistory } from 'vue-router'
import routerConstant from "./routerConstant";
import HomeScreen from '@/containers/HomeScreen.vue'
import LoginScreen from '@/containers/Auth/LoginScreen.vue'
import RegisterScreen from '@/containers/Auth/RegisterScreen.vue'
import CategoryScreen from '@/containers/Product/CategoryScreen.vue'
import DetailScreen from '@/containers/Product/DetailScreen.vue'
import EditScreen from '@/containers/Profile/EditScreen.vue'
import MainScreen from '@/containers/Profile/MainScreen.vue'

const routes = [
    {
        path: routerConstant.START,
        name : HomeScreen,
        component : HomeScreen
    },
    {
        path: routerConstant.LOGIN,
        name : LoginScreen,
        component : LoginScreen
    },
    {
        path: routerConstant.REGISTER,
        name : RegisterScreen,
        component : RegisterScreen
    },
    {
        path: routerConstant.CATEGORY_DETAIL,
        name : CategoryScreen,
        component : CategoryScreen
    },
    {
        path: routerConstant.PRODUCT_DETAIL,
        name : DetailScreen,
        component : DetailScreen
    },
    {
        path: routerConstant.PROFILE,
        name : MainScreen,
        component : MainScreen
    },
    {
        path: routerConstant.SETTING_PROFILE,
        name : EditScreen,
        component : EditScreen
    }, 
];
let router = createRouter({
    history: createWebHistory(),
    routes,
})
  
export default router;
