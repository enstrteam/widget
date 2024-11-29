<template>
  <div class="settings-page">
    <h2>Settings Page</h2>  
    <WidgetControl />
    <ExportBlock />
    <ProductList :selected-products="selectedProducts" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '../stores/productsStore'
import ProductList from '@/components/settings/ProductList.vue'
import WidgetControl from '@/components/settings/WidgetControl.vue'
import ExportBlock from '@/components/settings/ExportBlock.vue'

const productsStore = useProductsStore()
const selectedProducts = computed(() => productsStore.selectedProducts)


</script>

<style scoped>
.settings-page {
  width: 100%;
  background-color: transparent;
}

.thumbler-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
}

.fieldset-wrapper {
  margin-bottom: 20px;
}

.list-wrapper {
  width: 100%;
  margin: 40px 0;
}
</style>
