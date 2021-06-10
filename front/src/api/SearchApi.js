class SearchApi {
  static AUTOCOMPLETE_URL = '/buscaautocomplete'

  static getAutocompleteSearch (query) {
    return fetch(`${this.AUTOCOMPLETE_URL}/?productNameContains=${query}`,
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

export default SearchApi
