class SearchApi {
  static AUTOCOMPLETE_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete';

  static getAutocompleteSearch(query) {
    return fetch(`${this.AUTOCOMPLETE_URL}/?productNameContains=${query}`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SearchApi;