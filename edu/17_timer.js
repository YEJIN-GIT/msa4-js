// 타이머 함수
//  비동기적으로 코드를 실행

// setTimeout(cb, ms[, ...args]): number
//  설정한 일정 시간(ms) 후에 콜백함수(cb)를 실행
//  콜백함수에 파라메터가 필요한 경우 ...args를 추가
//  리턴값은 timeoutID 0이 아닌 정수값 (해당 타이머의 고유한 식별값)
const timeoutId1 = setTimeout(() => {
  console.log('1초');
}, 1000);
const timeoutId2 = setTimeout(() => {
  console.log('2초');
}, 2000);
const timeoutId3 = setTimeout(() => {
  console.log('3초');
}, 3000);

// console.log(timeoutId1);

// clearTimeout(timeoutId);
clearTimeout(timeoutId1);


// setInterval(cb, ms[, ...args]): number
//  설정한 일정 시간마다 콜백함수를 실행
//  반환값은 intervalID 0이 아닌 정수값 (해당 인터벌의 고유한 식별값)
const intervalId1 = setInterval(() => {
  console.log('인터벌');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId1);
}, 5000);