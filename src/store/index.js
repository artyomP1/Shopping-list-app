import Vue from "vue";
import Vuex from "vuex";
import { shoppinglistService } from "../services/shoppinglistService.js";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shoppingList: [],
        currItem: null,
        currProduct: null,
    },
    getters: {
        shoppingList(state) {
            return state.shoppingList;
        },
    },
    mutations: {
        setItems(state, { shoppingList }) {
            state.shoppingList = shoppingList;
        },
        remove(state, { productId }) {
            const idx = state.shoppingList.findIndex(
                (product) => product.id === productId
            );
            state.shoppingList.splice(idx, 1);
        },
        markAsDone(state, productId) {
            let product = state.shoppingList.find(
                (product) => product.id === productId
            );
            product.isDone = !product.isDone;
            shoppinglistService.markAsDone(productId);
        },
        setCurrProduct(state, productId) {
            const currProduct = shoppinglistService.getProductById(productId);
            state.currProduct = currProduct;
        },
        save(state, { savedProduct }) {
            state.shoppingList = [...state.shoppingList, savedProduct];
        },
    },
    actions: {
        async loadShoppingList(context) {
            const shoppingList = await shoppinglistService.getItems();
            context.commit({ type: "setItems", shoppingList });
            return shoppingList;
        },
        async remove(context, productId) {
            await shoppinglistService.remove(productId);
            context.commit({ type: "remove", productId });
        },
        async save(context, product) {
            const newProduct = await shoppinglistService.add(product);
            context.commit({ type: "save", savedProduct: newProduct });
            return newProduct;
        },
    },
    modules: {},
});