<template>
  <section>
    <div class="back-btn">
      <router-link to="/">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.828 7L16 7V9L3.828 9L9.192 14.364L7.778 15.778L0 8L7.778 0.222L9.192 1.636L3.828 7Z"
            fill="#B1B0B8"
          />
        </svg>
      </router-link>
    </div>
    <div class="product-detailes">
      <h1>{{ product.name }}</h1>
      <p class="product-desc">{{ product.desc }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetailes",
  components: {},
  data() {
    return {
      product: {},
    };
  },
  created() {
    let product = {};
    const productId = this.$route.params.id;
    if (productId) {
      this.$store.commit("setCurrProduct", productId);
      product = this.$store.state.currProduct;
      product = JSON.parse(JSON.stringify(product));
    }
    this.product = product;
  },
};
</script>
