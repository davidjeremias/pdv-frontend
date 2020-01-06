import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home'
import Login from './views/Login';
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
            
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {requiresAuth: true}
        }
    ]
})

router.beforeEach((to, from, next) =>{
    if(to.meta.requiresAuth){
        let auth = false;
        if(!auth){
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }
})
export default router