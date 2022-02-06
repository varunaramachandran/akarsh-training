<template>
  <div class="card" style="width: 18rem">
    <img :src="product.image" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.price }}
      </p>
      <a @click="addToCart" class="btn btn-primary" v-if="!isAlreadyInCart"
        >Add to Cart</a
      >
      <a @click.prevent="" class="btn btn-primary" v-else>Already in cart</a>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import Product1 from "../assets/product1.jpg";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      Product1,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
  computed: {
    isAlreadyInCart() {
      return _.find(this.cart, ({ id }) => id === this.product.id)
        ? true
        : false;
    },
  },
};
</script>
<style>
</style>