// importing core vue files

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import Services from "./views/Services";
import About from "./views/About";
import Contact from "./views/Contact";



Vue.use(VueRouter);

// 1. Define Routes
const myRoutes = [
    {
        path: "/",
        component: Home,
        name: 'home'
    },
    {
        path: "/services",
        component: Services,
        name: "services"
    },
    {
        path: "/about",
        component: About,
        name: "about"
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact"
    },
   
];


// 2. Define a Router Instance
const router = new VueRouter({
    mode: "history",
     routes: myRoutes,
});


// 3. Register your default routes in your application
export default router;