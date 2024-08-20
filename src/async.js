const fetchProduct = (error) => {
  if (error === "error") {
    return Promise.reject("fetch error");
  }

  return Promise.resolve({ item: "Juice", price: 2400 });
};

module.exports = fetchProduct;
