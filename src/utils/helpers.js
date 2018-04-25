/*
* Returns the fisrt image url from a product
* @params product: object
* @return string
*/
export function getFirstImage(product) {
  return product.items[0].images[0].imageUrl;
}

/*
* Find the min value from product sellers
* @params product: object
* @returs number
*/
export function getBestPrice(product) {
  let lowerPrice = [];
  product.items.map(item => {
    item.sellers.map(seller => {
      if(seller.commertialOffer && seller.commertialOffer.AvailableQuantity > 0) {
        lowerPrice.push(seller.commertialOffer.Price);
      }
      return true;
    });
    return true;
  });
  return (Math.max.apply(Math, lowerPrice)).toFixed(2);
}
