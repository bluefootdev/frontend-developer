/*
* Returns the fisrt image url from a product
* @params product: object
* @return string
*/
export function getFirstImage (product) {
  return product.items[0].images[0].imageUrl
}

/*
* Find the min value from product sellers
* @params product: object
* @returs number
*/
export function getBestPrice (product) {
  let lowerPrice = []
  product.items.map(item => {
    item.sellers.map(seller => {
      if (seller.commertialOffer && seller.commertialOffer.AvailableQuantity > 0) {
        lowerPrice.push(seller.commertialOffer.Price)
      }
      return true
    })
    return true
  })
  let lower = (Math.min.apply(Math, lowerPrice))
  if (isFinite(lower)) {
    return lower.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
  return 'Indisponível'
}
