<template>
  <div class="products-list">
    <ProductPreview
      v-for="(productItem, idx) in shoppingList"
      :key="productItem.name + idx"
      :productItem="productItem"
      :idx="idx"
      @removeProduct="removeProduct"
      @markAsDone="markAsDone"
    ></ProductPreview>
  </div>
</template>

<script>
import ProductPreview from "./ProductPreview.vue";
export default {
  name: "PriductsList",
  props: {
    shoppingList: Array,
  },
  components: {
    ProductPreview,
  },
  methods: {
    removeProduct(productId) {
      this.$emit("remove", productId);
    },
    markAsDone(productId) {
      this.$emit("markAsDone", productId);
    },
  },
};
</script>
