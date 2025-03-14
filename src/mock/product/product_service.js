class ProductService {
  constructor(productClient) {
    this.productClient = productClient; // 외부에서 주입하는 패턴으로 productClient를 생성
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
