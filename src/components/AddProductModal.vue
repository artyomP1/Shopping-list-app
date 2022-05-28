<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
              fill="#72717A"
            />
          </svg>
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <div>
            <div class="input-container">
              <label>Name</label>
              <input class="input name" v-model="product.name" type="text" />
            </div>
            <div class="input-container">
              <label class="price-label">Price </label>
              <input
                class="input price"
                v-model="product.price"
                type="number"
                min="0"
              />
            </div>
          </div>
          <div class="input-container desc">
            <label>Description </label>
            <textarea
              class="input desc"
              v-model="product.desc"
              type="text-area"
              rows="4"
            />
          </div>
        </slot>
      </section>

      <footer class="modal-footer">
        <button
          class="btn"
          :class="{ disabled: isDisabled }"
          @click="saveProduct"
        >
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
              fill="#FF941A"
            />
          </svg>
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      product: {
        price: null,
        name: "",
        desc: "",
      },
    };
  },
  computed: {
    isDisabled() {
      return !this.product.price && this.product.name.length < 2;
    },
  },
  methods: {
    close() {
      this.reset();
      this.$emit("close");
    },
    saveProduct() {
      if (this.isDisabled) return;
      this.$emit("saveProduct", this.product);
      this.close();
    },
    reset() {
      this.product = {
        price: null,
        name: "",
        desc: "",
      };
    },
  },
};
</script>
