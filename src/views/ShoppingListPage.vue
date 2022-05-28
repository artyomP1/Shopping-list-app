<template>
  <section class="shopping-list-page">
    <h1>Shopping List</h1>
    <ProductList
      :shoppingList="shoppingList"
      @remove="removeProduct"
      @markAsDone="markAsDone"
    />
    <div class="total">
      <span>Total:</span> <span>{{ totalPrice }} NIS</span>
    </div>
    <button class="btn" @click="showModal">
      <span class="plus-icon">+</span> Add Product
    </button>
    <AddProductModal
      v-show="isModalVisible"
      @close="closeModal"
      @saveProduct="saveProduct"
    />
  </section>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import AddProductModal from "@/components/AddProductModal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ShoppingList",
  components: {
    ProductList,
    AddProductModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  async created() {
    await this.loadShoppingList();
  },
  computed: {
    ...mapGetters({
      shoppingList: "shoppingList",
    }),
    totalPrice() {
      let totalPrice = 0;
      this.shoppingList.forEach((product) => {
        totalPrice += product.price;
      });
      return totalPrice;
    },
  },
  methods: {
    ...mapActions(["remove", "save", "loadShoppingList"]),
    async saveProduct(product) {
      try {
        await this.save(product);
        console.log("Product added succesfully");
      } catch (e) {
        console.error(e);
      }
    },
    async removeProduct(productId) {
      console.log("productId", productId);
      try {
        await this.remove(productId);
        console.log("Removed Succesfully");
      } catch (e) {
        console.error(e);
      }
    },
    markAsDone(productId) {
      this.$store.commit("markAsDone", productId);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
