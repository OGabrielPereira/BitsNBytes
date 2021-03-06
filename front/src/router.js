import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./layouts/Default.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("./views/Home.vue"),
            },
            {
                path: "/apoie",
                name: "Apoie",
                component: () => import("./views/Apoie.vue"),
            },
            {
                path: "/adote",
                name: "Adote",
                component: () => import("./views/Adote.vue"),
            },
            {
                path: "/login",
                name: "Login",
                component: () => import("./views/Login.vue"),
            },
            {
                path: "/logout",
                name: "Logout",
                component: () => import("./views/Logout.vue"),
            },
            {
                path: "/admin",
                name: "Admin",
                component: () => import("./views/Admin.vue"),
            },

            {
                path: "/galeria/:id",
                name: "Galeria",
                component: () => import("./views/Galeria.vue"),
            },
            {
                path: "/comentar/:id",
                name: "Comentar",
                component: () => import("./views/Comentar.vue"),
            },

            {
                path: "/admin/add",
                name: "Add",
                component: () => import("./views/Add.vue"),
            },
            {
                path: "/admin/updog/:id",
                name: "Update",
                component: () => import("./views/Updog.vue"),
            },
            {
                path: "/admin/diario/:id",
                name: "Registrod",
                component: () => import("./views/RegDiario.vue"),
            },
            {
                path: "/admin/consultas/:id",
                name: "Registrom",
                component: () => import("./views/Consultas.vue"),
            },
            {
                path: "/admin/vacinas/:id",
                name: "Vacinas",
                component: () => import("./views/Vacinas.vue"),
            },
            {
                path: "/admin/galeria/:id",
                name: "GaleriaAdmin",
                component: () => import("./views/GaleriaAdmin.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
