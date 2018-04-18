import fetch from 'cross-fetch';

const AUTOCOMPLETE_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains=';

const headers = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true'
});
const options = {
  method: 'GET',
  headers,
  mode: 'cors',
  cache: 'default'
};

const searchProducts = async text => {
  if(!text) {
    return {};
  }
  try {
    const response = await fetch(`${AUTOCOMPLETE_URL}${text}`, options);
    return response.json();
  } catch(e) {
    throw e;
  }
}

export {
  searchProducts
};
