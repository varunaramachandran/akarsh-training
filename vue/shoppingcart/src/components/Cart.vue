<template>
  <div>
    <ul class="list-group" v-if="!cart.length">
      <li class="list-group-item">No added products</li>
    </ul>
    <ul class="list-group" v-else>
      <li class="list-group-item" v-for="(product, index) in cart" :key="index">
        {{ product.name }}
        <a class="btn btn-primary" @click="$emit('remove-item', product.id)"
          >Remove Item</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>