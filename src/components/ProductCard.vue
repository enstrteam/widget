<template>
  <div class="product-card">
    <router-link :to="{ name: 'product', params: { id: product.id } }" class="product-card__link">
      <img :src="product.imageUrl" :alt="product.name" class="product-card__image" />
      <div class="product-card__details">
        <h3 class="product-card__name">{{ product.name }}</h3>
        <p class="product-card__price">Price: {{ product.price }} {{ product.currency }}</p>
      </div>
    </router-link>
    <button class="btn btn-primary" @click="$emit('add-to-cart', product)">Add to cart</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type Product } from '@/services/ecwidService';

defineProps<{ product: Product }>();
</script>

<style scoped>
.product-card {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: calc(20% - 10px); 
  min-width: 200px;
  height: 290px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card__link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card__image {
  width: 100%;
  height: 150px; 
  object-fit: cover;
}

.product-card__details {
  padding: 8px;
  text-align: center;
}

.product-card__name {
  font-size: 1em;
  margin: 0;
  line-height: 110%;
}

.product-card__price {
  color: #888;
  margin: 5px 0 0;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
