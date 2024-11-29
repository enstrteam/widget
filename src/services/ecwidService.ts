import axios from 'axios';

const STORE_ID = 101560752;
const API_TOKEN = 'public_eaBDuVmrse1hKZun4qaPF3LewugrnEgq';
const BASE_URL = `https://app.ecwid.com/api/v3/${STORE_ID}`;

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  quantity?: number;
  displayed?:boolean
  addedFromCustomWidget?: boolean;
}

export const EcwidService = {
  async fetchProducts(limit: number = 10): Promise<Product[]> {
    try {
      const response = await axios.get(`${BASE_URL}/products`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        },
        params: {
          limit: limit,
          sortBy: 'UPDATED_TIME_DESC'
        }
      });
      
      return response.data.items.map((product: Product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        currency: product.currency,
        imageUrl: product.imageUrl,
        quantity: 1
      }));
    } catch (error) {
      console.error('Ошибка при загрузке товаров:', error);
      return [];
    }
  },

  async getRecentlyUpdatedProducts(limit: number = 10): Promise<Product[]> {
    return this.fetchProducts(limit);
  }
};
