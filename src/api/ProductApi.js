class ProductApi {
  static API_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/api';

  static getFeaturedProducts() {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/?O=OrderByBestDiscountDESC&_from=0&_to=2`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static fullTextSearch(query, ini = 0, limit = 2) {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/${query}?map=ft&_from=${ini}&_to=${limit}`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getProductById(productId) {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/?fq=productId:${productId}&_from=0&_to=1`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi;