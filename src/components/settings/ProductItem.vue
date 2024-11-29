<template>
  <div class="list-element list-element--normal list-element--has-hover">
    <div class="list-element__toggle">
      <input
        type="checkbox"
        :checked="isSelected"
        @change="toggleSelected"
        :id="'product-' + product.id"
        class="list-element__toggle-checkbox"
      />
      <label :for="'product-' + product.id" class="list-element__toggle-label"></label>
    </div>
    <div class="list-element__image">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div class="list-element__content">
      <div class="list-element__info">
        <div class="list-element__header">
          <div class="list-element__main-info">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <div class="list-element__title">
                <span>{{ product.name }}</span>
              </div>
            </router-link>
            <div class="list-element__description">
              <span class="muted">{{ product.id }}</span>
            </div>
          </div>
          <div class="list-element__price">{{ product.price }} {{ product.currency }}</div>
        </div>
        <div class="list-element__data-row">
          <div class="product">
            <div class="product__info">
              <div class="product__details-wrapper">
                <div class="product__details">
                  <div class="product__status">
                    <label class="checkbox micro">
                      <input
                        name=""
                        type="checkbox"
                        :checked="isDisplayed"
                        @change="toggleDisplayed"
                      />
                      <div data-on="Enabled" data-off="Disabled">
                        <div></div>
                      </div>
                      <span class="checkbox__on-text-placeholder">Enabled</span>
                      <span class="checkbox__off-text-placeholder">Disabled</span>
                    </label>
                    <span class="product-instock product-instock--yes">In stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-element__data-row">
          <div class="labeled-icon labeled-icon--prepend-icon">
            <span class="labeled-icon__icon svg-icon" v-if="isDisplayed">
              <svg width="17" height="18" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path
                  d="M8.267 13.505a.506.506 0 0 1 .466 0l4.047 2.1-.773-4.447a.49.49 0 0 1 .144-.437l3.274-3.15-4.525-.648a.5.5 0 0 1-.376-.27L8.5 2.608 6.476 6.653a.5.5 0 0 1-.376.27l-4.525.649 3.274 3.149a.49.49 0 0 1 .144.437l-.773 4.446 4.047-2.1zM3.79 16.942c-.367.19-.796-.117-.726-.52l.9-5.176L.152 7.581a.491.491 0 0 1 .277-.842l5.267-.755 2.356-4.71a.503.503 0 0 1 .896 0l2.356 4.71 5.267.755c.41.06.574.556.277.842l-3.811 3.665.9 5.176c.07.403-.359.71-.726.52L8.5 14.498l-4.711 2.444z"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </span>
            <span class="labeled-icon__label"
              ><span class="gwt-InlineLabel" v-if="isDisplayed"
                >Featured on cart page</span
              ></span
            >
          </div>
        </div>
      </div>
      <div class="list-element__actions">
        <div class="list-element__price">{{ product.price }} {{ product.currency }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/services/ecwidService'
import { defineProps, computed } from 'vue'
import { useProductsStore } from '@/stores/productsStore';

const productStore = useProductsStore();

const props = defineProps<{
  product: Product
}>()

const isSelected = computed(() => {
  return productStore.selectedProducts.includes(props.product.id);
})

const toggleSelected = () => {
  if (isSelected.value) {
    productStore.removeProductFromSelection(props.product.id);
  } else {
    productStore.addProductToSelection(props.product.id);
  }
}

const isDisplayed = computed(() => {
  return productStore.products.find(p => p.id === props.product.id)?.displayed;
})

const toggleDisplayed = () => {
  productStore.toggleProductDisplayed(props.product.id);
}
</script>

<style scoped></style>
