import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/start",
        name: "Start",
        component: Start,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
