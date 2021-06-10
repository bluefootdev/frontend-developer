class ProductApi {
  static API_URL = '/api'

  static getFeaturedProducts () {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/?O=OrderByBestDiscountDESC&_from=0&_to=5`,
      {
        headers: {
          'Authorization': 'L0r3m1pSUm',
        }
      }).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static fullTextSearch (query, ini = 0, limit = 2) {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/${query}?map=ft&_from=${ini}&_to=${limit}`,
      {
        headers: {
          'Authorization': 'L0r3m1pSUm',
        }
      }).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getProductById (productId) {
    return fetch(`${this.API_URL}/catalog_system/pub/products/search/?fq=productId:${productId}&_from=0&_to=1`,
      {
        headers: {
          'Authorization': 'L0r3m1pSUm',
        }
      }).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }
}

export default ProductApi
