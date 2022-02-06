<template>
  <div class="container">
    <cart :cart="cart" @remove-item="removeCart"></cart>
    <section class="products">
      <product
        v-for="(p, index) in products"
        :key="index"
        :product="p"
        @add-to-cart="addToCart"
        :cart="cart"
      ></product>
    </section>
  </div>
</template>


<script>
import _ from "lodash";
import Product from "./components/Product.vue";
import { products } from "./db/product";
import Cart from "./components/Cart.vue";
export default {
  name: "wrapper",
  data() {
    return {
      products,
      cart: [],
    };
  },
  components: {
    Product,
    Cart,
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeCart(productid) {
      this.cart = _.filter(this.cart, ({ id }) => id !== productid);
    },
  },
};
</script>

<style>
/* .layout {
  background-color: brown;
}
.products {
  display: flex;
} */
</style>

