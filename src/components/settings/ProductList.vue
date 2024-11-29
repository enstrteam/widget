<template>
  <div class="list-wrapper">
    <div class="filtered-list__body">
      <div class="filtered-list__items long-list">
        <ProductItem 
          v-for="product in products" 
          :key="product.id" 
          :product="product"
          :selected-products="selectedProducts"
          @update:selectedProducts="updateSelectedProducts"
        />
      </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import ProductItem from './ProductItem.vue';

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
const selectedProducts = computed(() => productsStore.selectedProducts);

function updateSelectedProducts(newSelection: number[]) {
  productsStore.selectedProducts = newSelection;
}
</script>

<style scoped>
.list-wrapper {
  width: 600px;
  margin: 40px 0;
}
</style>
