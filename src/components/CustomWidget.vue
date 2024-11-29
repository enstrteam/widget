<template>
  <div class="custom-widget">
    <h3>Recently updated products</h3>
    <ItemsPerRowSelector />
    <div class="product-cards">
      <ProductCard 
        v-for="product in displayedProducts" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { useCartStore } from '@/stores/cartStore';
import ProductCard from './ProductCard.vue';
import ItemsPerRowSelector from '@/components/settings/ItemsPerRowSelector.vue';
import { type Product } from '@/services/ecwidService';

const productsStore = useProductsStore();
const cartStore = useCartStore();
const products = computed(() => productsStore.products);
const itemsPerRow = computed(() => productsStore.itemsPerRow);
const displayedProducts = computed(() => {
  return products.value.filter(product => product.displayed).slice(0, itemsPerRow.value);
});

const addToCart = (product: Product) => {
  cartStore.addToCart(product, true);
};
</script>

<style scoped>
.custom-widget {
  width: 100%;
}

.product-cards {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
