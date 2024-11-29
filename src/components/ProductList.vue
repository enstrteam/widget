<template>
  <div>
    <CartItem 
      v-for="product in products" 
      :key="product.id" 
      :product="product"
      @add-to-cart="$emit('add-to-cart', product)"
    />
  </div>
</template>

<script setup lang="ts">
import { type Product } from '@/services/ecwidService';
import CartItem from './CartItem.vue';

defineProps<{
  products: Product[]
}>();

defineEmits(['add-to-cart']);
</script>
