const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// Mock을 이용한 단위 테스트

// fake productClient를 사용할 것이다 명시
jest.mock("../product_client");

// BAD CASE
// 내부적으로 ProductClient 생성자를 활용해서 인스턴스를 생성하게 되고, 네트워크 상태에 의존해서 데이터를 가져오는 테스트 코드는 좋지 않다.
// 네트워크 상태에 의존하는 부분은 mock을 활용하여, 우리가 실질적으로 체크해야 하는 비즈니스로직(available 한 데이터만 노출하도록)이 서로 의존하지 않도록 분리해준다.
describe("productService di", () => {
  // mock 함수가 비동기적으로 호출
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear(); // 2번 호출하는 것을 방지하기 위해, mock을 초기화
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
