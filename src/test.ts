/**
 * callback으로 전달받은 함수를 실행해서 로그를 출력한다.
 */
export const logTime = (
  callback: () => void,
  log?: (term: number, start: number, end: number) => void,
) => {
  const start = Date.now();
  callback();
  const end = Date.now();

  const term = end - start;
  if (log) {
    log(term, start, end);
  } else {
    console.log('time ::: ', term, ' ms');
  }
}