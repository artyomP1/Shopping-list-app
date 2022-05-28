<template>
  <section class="product-preview">
    <span class="counter">{{ idx + 1 }}</span>
    <router-link
      :to="'/productDetailes/' + productItem.id"
      class="product-item"
      :class="{ done: productItem.isDone }"
    >
      <span class="product-name">{{ productItem.name }}</span>
      {{ productItem.price }} NIS
    </router-link>
    <div class="icon-container">
      <span class="icon" @click="markAsDone"
        ><svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04V5.04Z"
            fill="#7A7A93"
          />
        </svg>
      </span>
      <span class="icon" @click="removeProduct"
        ><svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
            fill="#7A7A93"
          /></svg
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    productItem: Object,
    idx: Number,
  },
  methods: {
    removeProduct() {
      this.$emit("removeProduct", this.productItem.id);
    },
    markAsDone() {
      this.$emit("markAsDone", this.productItem.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
