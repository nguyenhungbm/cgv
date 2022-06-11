import { createRouter, createWebHistory } from 'vue-router'
import { getUserInfo, isAuthenticated } from "@/plugins/utils/cookie";
import routerConstant from "./routerConstant";
const HomeScreen = () => import('@/containers/HomeScreen.vue')
const LoginScreen = () => import('@/containers/Auth/LoginScreen.vue')
const RegisterScreen = () => import('@/containers/Auth/RegisterScreen.vue')
const CategoryScreen = () => import('@/containers/Product/CategoryScreen.vue')
const ProductScreen = () => import('@/containers/Product/ProductScreen.vue')
const EditScreen = () => import('@/containers/Profile/EditScreen.vue')
const OrderScreen = () => import('@/containers/Profile/OrderScreen.vue')
const MainScreen = () => import('@/containers/Profile/MainScreen.vue')
import {auth,guest, middlewarePipeline} from "./middlewares";
const routes = [
    {
        path: routerConstant.START,
        name : 'HomeScreen',
        component : HomeScreen,
        meta: {
            middleware: [auth],
        },
    },
    {
        path: routerConstant.LOGIN,
        name : 'LoginScreen',
        component : LoginScreen,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: routerConstant.REGISTER,
        name : 'RegisterScreen',
        component : RegisterScreen,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: routerConstant.CATEGORY_DETAIL,
        name : 'CategoryScreen',
        component : CategoryScreen,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: routerConstant.PRODUCT_DETAIL,
        name : 'ProductScreen',
        component : ProductScreen,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: routerConstant.PROFILE,
        name : 'MainScreen',
        component : MainScreen,
        meta: {
            middleware: [guest],
        },
    },
    {
        path: routerConstant.SETTING_PROFILE,
        name : 'EditScreen',
        component : EditScreen,
        meta: {
            middleware: [guest],
        },
    }, 
    {
        path: routerConstant.ORDER.LIST,
        name : 'OrderScreen',
        component : OrderScreen,
        meta: {
            middleware: [auth],
        },
    }, 
    {
        path: '/:catchAll(data.*)',
        name : 'HomeScreen',
        component : HomeScreen,
    }, 
    {
        path: '/:catchAll(.*)',
        name : 'HomeScreen',
        component : HomeScreen,
    }, 
];
let router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
      return next();
    }
  
    const user = getUserInfo();
    const isLoggedIn = isAuthenticated();
    const { middleware } = to.meta;
    const context = { to, from, next, user, isLoggedIn };
  
    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    });
  });
export default router;
