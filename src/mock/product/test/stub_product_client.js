// test용으로만 사용하는 js 파일

class StubProductClient {
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  }
}

module.exports = StubProductClient;
