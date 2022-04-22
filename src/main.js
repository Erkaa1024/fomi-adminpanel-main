import {
    createApp
} from 'vue'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

import App from './App.vue'
import naive from 'naive-ui'

import Home from "@/layouts/Main.vue";
import Login from "@/layouts/Login.vue";
import Dashboard from "@/layouts/dashboard.vue";

import talentUser from "@/layouts/users/talent.vue";
import userUser from "@/layouts/users/user.vue";

import becomeStarReq from "@/layouts/request/become-star.vue";
import addStarReq from "@/layouts/request/add-star.vue";

import jurUrService from "@/layouts/service/jur-ur.vue";
import orderService from "@/layouts/service/order.vue";
import donationService from "@/layouts/service/donation.vue";
import promoService from "@/layouts/service/promo.vue";
import bannerService from "@/layouts/service/banner.vue";

import financeReport from "@/layouts/report/finance.vue";
import talentReport from "@/layouts/report/talent.vue";

import talentNotif from "@/layouts/notifications/talent.vue";
import applicationNotif from "@/layouts/notifications/application.vue";

import blackListSettings from "@/layouts/settings/black-list.vue";
import conditionSettings from "@/layouts/settings/condition.vue";
import permissionSettings from "@/layouts/settings/permission.vue";

import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// import Main from "@/layouts/Main.vue"

const routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/',
            component: Dashboard
        }]
    },
    {
        path: '/',
        component: Home,
        children: [{
                path: '/dashboard',
                component: Dashboard
            },

            {
                path: 'users/talent',
                component: talentUser
            },
            {
                path: 'users/user',
                component: userUser
            },

            {
                path: 'request/become-star',
                component: becomeStarReq
            },
            {
                path: 'request/add-star',
                component: addStarReq
            },

            {
                path: 'service/jur-ur',
                component: jurUrService
            },
            {
                path: 'service/order',
                component: orderService
            },
            {
                path: 'service/donation',
                component: donationService
            },
            {
                path: 'service/promo',
                component: promoService
            },
            {
                path: 'service/banner',
                component: bannerService
            },

            {
                path: 'report/finance',
                component: financeReport
            },
            {
                path: 'report/talent',
                component: talentReport
            },

            {
                path: 'notifications/talent',
                component: talentNotif
            },
            {
                path: 'notifications/application',
                component: applicationNotif
            },

            {
                path: 'settings/black-list',
                component: blackListSettings
            },
            {
                path: 'settings/condition',
                component: conditionSettings
            },
            {
                path: 'settings/permission',
                component: permissionSettings
            },
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .use(naive)
    .mount('#app')

export default router;