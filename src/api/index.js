const AUTOCOMPLETE_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains=';

const searchProducts = async text => {
  if(!text) {
    return {};
  }
  try {
    const response = fetch(`${AUTOCOMPLETE_URL}${text}`)
    return response.json();
  } catch(e) {
    console.error('Error in searchProducts: ', e);
  }
}

export {
  searchProducts
};
