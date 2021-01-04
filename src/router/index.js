import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('../views/Main.vue'),
        children: [{
                path: '/',
                name: 'takeouthome',
                component: () =>
                    import ('../views/TakeoutHome.vue'),
            },
            {
                path: '/takeoutgoods',
                name: 'takeoutgoods',
                component: () =>
                    import ('../views/TakeoutGoods.vue'),
            },
            {
                path: '/shoppingcart',
                name: 'shoppingcart',
                component: () =>
                    import ('../views/ShoppingCart.vue'),
            },
            {
                path: '/login',
                name: 'login',
                component: () =>
                    import ('../views/Login.vue'),
            },
            {
                path: '/backstagehome',
                name: 'backstagehome',
                component: () =>
                    import ('../views/BackstageHome.vue'),
            }

        ]

    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router