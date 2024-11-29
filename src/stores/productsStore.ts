import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Wireless Mouse',
        price: 29.99,
        currency: 'USD',
        imageUrl: '/images/mouse.webp',
        quantity: 1,
        displayed: true,
      },
      {
        id: 2,
        name: 'Gaming Keyboard',
        price: 79.99,
        currency: 'USD',
        imageUrl: '/images/gaming keyboard.webp',
        quantity: 2,
        displayed: true,
      },
      {
        id: 3,
        name: 'Bluetooth Headphones',
        price: 49.99,
        currency: 'USD',
        imageUrl: '/images/bluetooth headphones.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 4,
        name: 'USB-C Hub',
        price: 29.99,
        currency: 'USD',
        imageUrl: '/images/usb-c hub.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 59.99,
        currency: 'USD',
        imageUrl: '/images/bluetooth speaker.webp',
        quantity: 1,
        displayed: true,
      },
      {
        id: 6,
        name: 'Webcam',
        price: 39.99,
        currency: 'USD',
        imageUrl: '/images/webcam.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 7,
        name: 'External Hard Drive',
        price: 89.99,
        currency: 'USD',
        imageUrl: '/images/external hard drive.webp',
        quantity: 1,
        displayed: true,
      },
      {
        id: 8,
        name: 'Wireless Charger',
        price: 19.99,
        currency: 'USD',
        imageUrl: '/images/wireless charger.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 9,
        name: 'Smartwatch',
        price: 149.99,
        currency: 'USD',
        imageUrl: '/images/smartwatch.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 10,
        name: 'Fitness Tracker',
        price: 99.99,
        currency: 'USD',
        imageUrl: '/images/fitness tracker.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 11,
        name: 'Noise Cancelling Headphones',
        price: 129.99,
        currency: 'USD',
        imageUrl: '/images/noise cancelling headphones.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 12,
        name: 'Apple Watch',
        price: 399.99,
        currency: 'USD',
        imageUrl: '/images/apple watch.jpg',
        quantity: 1,
        displayed: true,
      },
      {
        id: 13,
        name: 'Samsung 8K TV',
        price: 2999.99,
        currency: 'USD',
        imageUrl: '/images/samsung tv.webp',
        quantity: 1,
        displayed: true,
      }
    ],
    isCustomWidgetEnabled: true,
    itemsPerRow: 5,
    selectedProducts: [] as number[],
  }),

  actions: {
    toggleCustomWidget() {
      this.isCustomWidgetEnabled = !this.isCustomWidgetEnabled;
    },

    toggleProductDisplayed(productId: number) {
      const item = this.products.find(item => item.id === productId);
      if (item) {
        item.displayed = !item.displayed;
      }
    },

    setItemsPerRow(count: number) {
      this.itemsPerRow = count;
    },

    increaseQuantity(productId: number) {
      const item = this.products.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity(productId: number) {
      const item = this.products.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeFromCart(productId: number) {
      const index = this.products.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },

    loadInitialCart() {
      // Здесь можно загрузить товары из внешнего источника, если необходимо.
    },

    addProductToSelection(productId: number) {
      if (!this.selectedProducts.includes(productId)) {
        this.selectedProducts.push(productId);
      }
    },

    removeProductFromSelection(productId: number) {
      this.selectedProducts = this.selectedProducts.filter(id => id !== productId);
    }
  },

  getters: {
    totalCost: (state) => {
      return state.products.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    },
    getProductById: (state) => {
      return (id: number) => state.products.find(item => item.id === id);
    },
  },
});
