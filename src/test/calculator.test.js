const Calculator = require("../calculator");

// test('set')
// test('add')
// ...

// 위와 같이 나열하는 방법보다 set로 구성하는 방법도 있다.
// test("calculator set", () => {
//   expect(calculator.set(3)).toBe(3);
// });

// it === 'Calculator'
// it 대신 test를 써도 무방하다.

// 각각의 test는 독립적으로 영향을 주지 않기 위해, 새로운 object를 생성해주는 것이 좋다.
// 하지만, 코드 중복이 발생할 수 있기 때문에, beforeEach를 활용한다.

describe("Calculator", () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("inits with 0", () => {
    expect(calculator.value).toBe(0);
  });

  it("set value", () => {
    calculator.set(3);
    expect(calculator.value).toBe(3);
  });

  it("clear value", () => {
    calculator.clear();
    expect(calculator.value).toEqual(0);
  });

  it("add value", () => {
    calculator.add(3);
    expect(calculator.value).toEqual(3);
  });

  it("add should throw an Error if value is greater than 100", () => {
    expect(() => {
      calculator.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract value", () => {
    calculator.subtract(3);
    expect(calculator.value).toBe(-3);
  });

  it("add and multiply value", () => {
    calculator.add(3);
    calculator.multiply(3);

    expect(calculator.value).toBe(9);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      calculator.divide(0);

      expect(calculator.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      calculator.set(1);
      calculator.divide(0);

      expect(calculator.value).toBe(Infinity);
    });

    if (
      ("4 / 4 === 1",
      () => {
        calculator.set(4);
        calculator.divide(4);

        expect(calculator.value).toBe(1);
      })
    );
  });
});
