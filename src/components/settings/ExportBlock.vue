<template>
  <div class="a-card a-card--normal long-list">
    <div class="a-card__paddings">
      <div class="form-area">
        <div class="form-area__title">Visibility Management</div>
        <div class="form-area__content">
          <label class="checkbox micro">
            <input type="checkbox" checked name="" disabled />
            <div><div></div></div>
          </label>

          <!-- disabled toggle -->
          <label class="checkbox micro">
            <input type="checkbox" name="" disabled />
            <div><div></div></div>
          </label>
          <p>Enable or disable individual products for the widget.</p>
        </div>
        <div class="form-area__title">Selection and Export</div>
        <div class="form-area__content">
          <p>Choose products and export selected items to a CSV file.</p>
        </div>
        <div class="form-area__action">
          <button
            :disabled="selectedProducts.length == 0"
            class="btn btn-primary"
            @click="exportSelected"
          >
            Export selected
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { exportToCSV } from '@/services/exportToCsv'
import { useProductsStore } from '@/stores/productsStore'
import { computed } from 'vue'

const productsStore = useProductsStore()
const products = productsStore.products
const selectedProducts = computed(() => productsStore.selectedProducts)

function exportSelected() {
  const selected = products.filter((product) => selectedProducts.value.includes(product.id))
  exportToCSV(selected)
}
</script>

<style></style>
