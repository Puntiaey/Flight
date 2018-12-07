var Order = (function () {
  var productID

  function Constructor () {
    return {
      name: 'unknown',
      get prodID () { return productID },
      set prodID (id) { productID = id },
      detail: function () {
        return 'product ID:' + productID
      },
      searchFlight: function (from, to) {
        return [
        {'flightNO': 'TG930', 'price': 120.65 }, 
        {'flightNO': 'SG123', 'price': 250.25}]
      }
    }
  }
  return Constructor
})()
exports.OrderConstructor = Order
