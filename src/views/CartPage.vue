<template>
  <div class="cart-page">
    <h2 class="cart-title">Cart</h2>
    <CartList :products="products" />
    <CustomWidget v-if="productsStore.isCustomWidgetEnabled" :products="products"/>
  </div>
</template>

<script setup lang="ts">
import CartList from '@/components/CartList.vue';
import { ref, onMounted } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { EcwidService, type Product } from '@/services/ecwidService';
import CustomWidget from '@/components/CustomWidget.vue';

const productsStore = useProductsStore();
const products = ref<Product[]>([]);

onMounted(async () => {
  try {
    // Попытка загрузки через API
    products.value = await EcwidService.fetchProducts();
  } catch (error) {
    // Если API не работает, загружаем из store
    console.error('Ошибка загрузки через API:', error);
    products.value = productsStore.products;
  }
});
</script>

<style scoped>
.cart-page {
  width: 100%;
}

.cart-title {
  margin-bottom: 30px;
}

.recently-updated-products {
  margin-top: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.product-card img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
