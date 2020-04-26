import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import (
                /* webpackChunkName: "dashboard" */
                "./../views/Dashboard.vue"
            )
    },
    {
        path: "/profile",
        name: "Profile",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "profile" */ "./../views/Profile.vue")
    },
    {
        path: "/users",
        name: "Users",
        component: () =>
            import ( /* webpackChunkName: "users" */ "./../views/Users.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes
});

export default router;