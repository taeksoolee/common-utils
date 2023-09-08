type GetPrecision = (a: number) => number;
const getPrecision: GetPrecision = (a) => {
  return String(a).split('.')[1]?.length ?? 0;
}

type GetMaxPecision = (a: number, b: number) => number;
const getMaxPecision: GetMaxPecision = (a, b) => {
  const precisionA = getPrecision(a);
  const precisionB = getPrecision(b);

  return Math.max(precisionA, precisionB);
}

/***********************
 * export functions
 ***********************/

type Add = (a: number, b: number) => number;
type Sub = (a: number, b: number) => number;
type Mul = (a: number, b: number) => number;
type Div = (a: number, b: number, errorValue?: number) => number;
type Sum = (list: Array<number>) => number;
type SumObjKey = <Key extends string>(list: Array<Record<Key, number>>, key: Key) => number;
type Avg = (list: Array<number>, errorValue?: number) => number;
type AvgObjKey = <Key extends string>(list: Array<Record<Key, number>>, key: Key, errorValue?: number) => number;
type Round = (value: number, precision: number) => number;

/**
 * a에서 b를 더한 값을 반환한다.
 * 두 값중 소수점 이하의 개수가 더 큰 값까지 소수점 이하 값을 반환한다.
 */
export const add: Add = (a, b) => {
  const maxPrecision = getMaxPecision(a, b);
  return round((a + b), maxPrecision);
}

/**
 * a에서 b를 뺀 값을 반환한다.
 * 두 값중 소수점 이하의 개수가 더 큰 값까지 소수점 이하 값을 반환한다.
 */
export const sub: Sub = (a, c) => {
  return add(a, mul(c, -1));
}

/**
 * a에 b를 곱합 값을 float(소수점 이하 8까지)까지 반환한다.
 * float(소수점 이하 8까지) 값까지 반환한다.
 */
export const mul: Mul = (a, b) => {
  return round((a * b), 8); 
}

/**
 * a에 b를 나눈 값을 float(소수점 이하 8까지)까지 반환한다.
 * b의 값이 0일 경우 errorValue(default=0)을 반환한다.
 */
export const div: Div = (a, b, errorValue=0) => {
  if (b === 0) return errorValue;
  return round((a / b), 8);
}

/**
 * list의 값을 모두 더한 값을 반환한다.
 * list가 빈 배열이라면 0을 반환한다.
 */
export const sum: Sum = (list) => {
  return list.reduce((a, c) => add(a, c), 0);
}

/**
 * list의 각 key의 값을 모두 더한 값을 반환한다.
 * list가 빈 배열이라면 0을 반환한다.
 */
export const sumObjKey: SumObjKey = (list, key) => {
  return list.reduce((a, c) => add(a, c[key]), 0);
}


/**
 * list의 값들에 평균 값을 float(소수점 이하 8까지)까지 반환한다.
 * list가 빈 배열이라면 errorValue(default=0)를 반환한다.
 */
export const avg: Avg = (list, errorValue=0) => {
  const size = list.length;
  return div(sum(list), size, errorValue);
}

/**
 * list의 각 key의 값들에 평균 값을 float(소수점 이하 8까지)까지 반환한다.
 * list가 빈 배열이라면 errorValue(default=0)를 반환한다.
 */
export const avgObjKey: AvgObjKey = (list, key, errorValue=0) => {
  const size = list.length;
  return div(sumObjKey(list, key), size, errorValue);
}

export const round: Round = (value, precision=8) => {
  return Number(value.toFixed(precision));
}