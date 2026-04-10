/**--------------------------------- */
/** Destructuring (구조분해) 문법 */
/**--------------------------------- */
//  배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법

/** 배열 */
const arr = [1, 2, 3, 4, 5];
// let arrVal1 = arr[0];
// let arrVal2 = arr[1];

// const [val1, , , , val5] = arr;  // 일부만 활용 가능
// const [val1, val2] = arr;        // 첫번째와 두번째만 활용
const [val1, val2, val3, val4, val5] = arr;

/** 객체 */
const user = {
  name: '홍길동',
  age: 20,
  gender: 'M'
};

const {age: userAge, gender, addr = '없음'} = user;
console.log(addr);