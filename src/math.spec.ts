import { add, avg, mul, sub, sum } from "./math";

describe('Function add', () => {
  test('should be processed about integer number', () => {
    let r: number = 0

    r = add(1, 1);
    expect(r).toBe(2);
  });

  test('should be processed about float number', () => {
    let r: number = 0;

    r = add(1.01, 1.02);
    expect(r).toBe(2.03);

    r = add(1.003, 1.02);
    expect(r).toBe(2.023);

    r = add(1.003, 1.0204);
    expect(r).toBe(2.0234);

    r = add(1.11111111111111, 2.22222222222222);
    expect(r).toBe(3.33333333333333);
  });
});

describe('Function sub', () => {
  test('should be processed about integer number', () => {
    let r: number = 0

    r = sub(3, 2);
    expect(r).toBe(1);
  });

  test('should be processed about float number', () => {
    let r: number = 0;

    r = sub(1.05, 1.03);
    expect(r).toBe(0.02);
  });
});

describe('Function mul', () => {
  test('should be processed about integer number', () => {
    let r: number = 0;

    r = mul(3, 2);
    expect(r).toBe(6);

    r = mul(33, 22);
    expect(r).toBe(726);
  });

  test('should be processed about float number', () => {
    let r: number = 0;

    r = mul(1.05, 1.03);
    expect(r).toBe(1.0815);

    // 8자리까지 계산한다.
    r = mul(1.23123123, 1.23123);
    expect(r).toBe(1.51592883);
  });
});

describe('Function div', () => {
  test('should be processed about integer number', () => {
    let r: number = 0;

    r = sub(3, 2);
    expect(r).toBe(1);
  });

  test('should be processed about float number', () => {
    let r: number = 0;

    r = sub(1.05, 1.03);
    expect(r).toBe(0.02);
  });
});

describe('Function sum', () => {
  test('should return sum from list', () => {
    const r = sum([1,2,3,4,5,6,7,8,9,10]);
    expect(r).toBe(55);
  });

  test('should return zero from empty list', () => {
    const r = sum([]);
    expect(r).toBe(0);
  });
});

describe('Function avg', () => {
  test('should return average about values of list', () => {
    const r = avg([1,2,3,4,5,6,7,8,9,10]);
    expect(r).toBe(5.5);
  });

  test('should be proceed from empty list', () => {
    let r: number = 0;
    r = avg([]);
    expect(r).toBe(0); // default

    r = avg([], -1)
    expect(r).toBe(-1);
  });
});

describe('Function avgObj', () => {
  test('should return average about values of list.key', () => {
    const r = avg([1,2,3,4,5,6,7,8,9,10]);
    expect(r).toBe(5.5);
  });
})



