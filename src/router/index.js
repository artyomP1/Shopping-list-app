import Vue from "vue";
import VueRouter from "vue-router";
import ShoppingListPage from "../views/ShoppingListPage.vue";
import ProductDetailes from "../views/ProductDetailes.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "ShoppingListPage",
        component: ShoppingListPage,
    },
    {
        path: "/productDetailes/:id",
        name: "ProductDetailes",
        component: ProductDetailes
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;