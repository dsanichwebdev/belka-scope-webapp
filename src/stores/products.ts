import { defineStore, acceptHMRUpdate } from 'pinia';
import { productsResponse } from 'src/mock/products-response.mock'; // Dumb data
import { type Product } from '../types/search-products';

export const useProductsStore = defineStore('myStore', {
  state: () => ({}),
  getters: {},
  actions: {
		searchProducts(photo?: string, description?: string):Product[] {
			console.log(photo, description)
			// TODO: some logic for getting products

			// dumb realization
			return productsResponse;
		},
	}
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
