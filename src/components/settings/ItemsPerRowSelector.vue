<template>
  <div class="fieldset fieldset--select">
    <div class="field field--medium">
      <label class="field__label">Items per row</label>
      <select class="field__select" v-model="itemsPerRow">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <div class="field__placeholder">{{itemsPerRow}}  Items per row</div>
      <span class="field__arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
          <path d="M7.85 10l5.02 4.9 5.27-4.9c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-6.45 6.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.66-.65 1.72-.65 2.37.01z"></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();
const itemsPerRow = computed({
  get: () => productsStore.itemsPerRow,
  set: (value) => productsStore.itemsPerRow = value,
});
</script>

<style scoped>
.fieldset {
  margin-bottom: 20px;
}

.field {
  display: flex;
  align-items: center;
}

.field__label {
  margin-right: 10px;
}

.field__select {
  padding: 5px;
}

.field__arrow {
  margin-left: 5px;
}
</style>
