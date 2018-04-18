import fetch from 'cross-fetch';

const BASE_URL = 'http://agenciabluefoot.vtexcommercestable.com.br/';
const AUTOCOMPLETE_URL = 'buscaautocomplete/?productNameContains=';
const FULL_TEXT_URL = 'api/catalog_system/pub/products/search/';

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  method: 'GET',
  mode: 'cors',
};

const request = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    return response.json();
  } catch (e) {
    throw e;
  }
}

export const searchProducts = async text => (
  !text
  ? {}
  : request(`${AUTOCOMPLETE_URL}${text}`)
      .then(response => response.itemsReturned)
);

export const searchFullTextProducts = async text => (
  !text ? {} : request(`${FULL_TEXT_URL}${text}?map=ft`)
);

export const goToProduct = ({link}) => {
  if(link) {
    window.location.open(link, '_blank');
  }
}
