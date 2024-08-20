const fetchProduct = require("../async");

describe("Async Function", () => {
  it("fetchProduct-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Juice", price: 2400 });
      done(); // 5s 정도를 기다린다. 수행이 느리다는 단점
    });
  });

  it("fetchProduct-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Juice", price: 2400 });
    });
  });

  it("fetchProduct-await ", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Juice", price: 2400 });
  });

  // asynchronous 함수이기 때문에 return을 붙여줘야 한다.
  it("fetchProduct-resolves ", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Juice",
      price: 2400,
    });
  });

  it("fetchProduct-rejects", async () => {
    return expect(fetchProduct("error")).rejects.toBe("fetch error");
  });
});
