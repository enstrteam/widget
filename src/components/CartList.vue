<template>
  <div class="cart">
    <ProductList 
      :products="cartItems" 
      @add-to-cart="addToCart"
    />
    <div class="cart-total">
      <span>Total: {{ cartTotal }} {{ cartItems[0]?.currency || 'USD' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProductList from './ProductList.vue';
import { useCartStore } from '@/stores/cartStore';
import { type Product } from '@/services/ecwidService';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);

const cartTotal = computed(() => cartStore.totalCost);

const addToCart = (product: Product) => {
  cartStore.addToCart(product);
};
</script>

<style scoped>
.cart {
  width: 600px;
  margin-bottom: 80px;
}

.cart-total {
  margin-top: 20px;
  font-weight: bold;
  text-align: right;
}
</style>
