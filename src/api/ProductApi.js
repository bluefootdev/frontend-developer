class ProductApi {
  static API_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/api';

  static getFeaturedProducts() {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/?O=OrderByBestDiscountDESC&_from=0&_to=2`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static fullTextSearch(query) {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/${query}?map=ft&_from=0&_to=2&fq=P:[1 TO 99999]`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi;