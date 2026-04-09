console.log('**원본은 보존하면서 오름차순 정렬 해주세요.***************')
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40];

// 값만 복사본
const copy = [...ARR1];
//const copy = JSON.parse(JSON.stringify(ARR1));
copy.sort((a, b) => a - b);
console.log(ARR1, copy);


console.log('**2짝수와 홀수를 분리해서 각각 새로운 배열을 만들어 주세요.***************');
const ARR2 = [5,7,3,4,5,1,2,0];
/* todo
const jjak = ARR2.filter(item =>
  if(item % 2 === 0) {
    return true;
  } else {
    return false;
  }
);
*/
const jjak = ARR2.filter(item => item % 2 === 0); // filter는 boolean리턴
const hol = ARR2.filter(item => item % 2 !== 0);

console.log(jjak, hol);


console.log('**각 요소의 3으로 나눈 나머지를 구해서, 새로운 배열로 생성해 주세요.***************');
const ARR3 = [5,7,3,4,5,1,2,0];
// const resultArr = ARR3.map(val => {
//     return val % 3;
//   });
console.log(ARR3.map(val => val % 3));

// 참조타입은 주소값을 참조! 
const arr4 = [5,7,3,4,5,1,2,0];
const result = test(arr4); // 참조타입은 주소값을 참조!
console.log(arr4, result);

function test(arr) {
  return arr.sort((a, b) => a - b); // 참조타입은 주소값을 참조!
}
// [0, 1, 2, 3,  4, 5, 5, 7] [ 0, 1, 2, 3,  4, 5, 5, 7]
