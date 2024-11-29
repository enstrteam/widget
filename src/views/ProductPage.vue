<template>
  <div class="product-page">
    <div class="product-image">
      <img :src="product?.imageUrl" :alt="product?.name" />
    </div>
    <div class="product-details">
      <h1>{{ product?.name }}</h1>
      <p>Description</p>
      <div class="product-price">Price: {{ product?.price }} {{ product?.currency }}</div>
      <div class="button-group">
        <button 
          class="btn btn-primary btn-medium" 
          @click="addToCart"
          :class="{ 'animate-down': isAnimating }"
          @animationend="isAnimating = false"
        >
          Add to cart
        </button>
        <button 
          class="btn btn-default btn-medium" 
          @click="removeFromCart"
          :class="{ 'animate': isAnimatingDown }"
          @animationend="isAnimatingDown = false"
          :disabled="productInCartQuantity <= 0"
        >
          Remove from cart
        </button>
      </div>
      <p v-if="productInCartQuantity > 0">In cart: {{ productInCartQuantity }} units</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';

const route = useRoute();
const cartStore = useCartStore();
const productsStore = useProductsStore();

const productIdParam = route.params.id;
const productId = Array.isArray(productIdParam) ? parseFloat(productIdParam[0]) : parseFloat(productIdParam);
const product = ref(productsStore.getProductById(productId));

const productInCartQuantity = computed(() => {
  const cartProduct = cartStore.getProductById(productId);
  return cartProduct ? cartProduct.quantity : 0;
});

const isAnimating = ref(false);
const isAnimatingDown = ref(false);

const addToCart = () => {
  if (!product.value) {
    return;
  }
  cartStore.addToCart(product.value);
  isAnimating.value = true;
};

const removeFromCart = () => {
  if (!product.value) {
    return;
  }
  cartStore.removeFromCart(product.value);
  isAnimatingDown.value = true;
};
</script>

<style scoped>
.product-page {
  width: 100%;
  display: flex;
  gap: 100px;
}

.product-image img {
  width: 600px;
  border-radius: 8px;
}

.product-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn.animate {
  animation: bounce 0.2s ease;
}

.btn.animate-down {
  animation: bounce-down 0.2s ease;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes bounce-down {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}
</style>
