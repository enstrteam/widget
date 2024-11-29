<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id } }"
    class="list-element list-element--compact list-element--has-hover list-element--inline-mode"
  >
    <div class="list-element__image">
      <img class="product-thumbnail__image" :src="product.imageUrl" :alt="product.name" />
    </div>
    <div class="list-element__content">
      <div class="list-element__info">
        <div class="list-element__header">
          <div class="list-element__main-info">
            <div class="list-element__title">
              <span>{{ product.name }}</span>
            </div>
            <div class="list-element__description">
              <span class="muted">{{ product.id }}</span>
            </div>
          </div>
          <div class="list-element__price">
            {{ product.quantity }} × {{ product.price }} {{ product.currency }}
          </div>
        </div>
        <div class="list-element__data-row">
          <span class="spacing--mr1" v-if="product.addedFromCustomWidget">Recently updated products</span>
        </div>
      </div>
      <div class="list-element__actions">
        <div class="list-element__price">
          {{ product.quantity }} × {{ product.price }} {{ product.currency }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { type Product } from '@/services/ecwidService'

defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
