import type { Product } from '@/services/ecwidService';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [
      {
        id: 1,
        name: 'Wireless Mouse',
        price: 29.99,
        currency: 'USD',
        imageUrl: '/images/mouse.webp',
        quantity: 1,
        addedFromCustomWidget: false,
      },
    ],
  }),
  actions: {
    addToCart(product: Product, addedFromCustomWidget = false) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1; 
        existingItem.addedFromCustomWidget = addedFromCustomWidget;
      } else {
        this.cartItems.push({ ...product, quantity: 1, addedFromCustomWidget }); 
      }
    },
    removeFromCart(product: Product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter(item => item.id !== product.id);
      }
    },
  },
  getters: {
    totalCost: (state) => {
      return state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    },
    getProductById: (state) => {
      return (id: number) => state.cartItems.find(item => item.id === id);
    },
  },
});
