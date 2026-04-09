// 배열 (Array) 객체
//  하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
//  데이터 타입은 Object
//  배열의 크기가 동적으로 변화 가능
//  인덱스(index) 번호가 각 요소에 부여되고 이를 이용해서 순서를 정함.
//  반복문을 통해서 배열의 각 요소에 쉽게 접근 가능
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[4]); // 5 출력

// length: 배열의 길이를 반환
console.log(arr1.length);
const obj = {
  length: 1,    // 속성(Property): 객체 안에 선언한 변수
  fnc: () => {  // 메소드(Method): 객체 안에 선언한 함수
    console.log('함수임');
  }
}


// Array.isArray(arg): boolean
//  배열객체인지 아닌지 체크
Array.isArray(arr1);     // true
Array.isArray('어레이1'); // false

// Array.includes(searchElement): boolean
//  배열의 특정요소의 존재여부를 확인하고 true/false 반환
arr1.includes(5);   // true
arr1.includes(100); // false


// 실습
/*
const myArr = [2, 4, 5, 6, 9];

function myIncludes (obj, arg) {
  let rtn = false;

  for(let i = 0; i < obj.length; i++) {
    if(obj[i] === arg) {
      // console.log(`${i}번째 ${obj[i]}`);  //todo
      rtn = true;
      break;
    } else {
      rtn = false;
    }
  }

  return rtn;
}

console.log( myIncludes(myArr, 8) );
*/

/*
const myArr = [2, 4, 5, 6, 9];

function myIncludes(search, arr) {
  let rtn = false;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === search) {
      //console.log(`${i}인덱스 ${arr[i]}`);  //todo
      rtn = true;
      break;
    } else {
      rtn = false;
    }
  }

  return rtn;
}

console.log( myIncludes(8, myArr) );
*/

/*
const myArr = [2, 4, 5, 6, 9];

function myIncludes(arr, search) {
  let result = false;

  for(let idx = 0; idx < arr.length; idx++) {
    if(search === arr[idx]) {
      result = true;
    }
  }

  return result;
}

console.log(`마이어레이: ${myIncludes(myArr, 100)}`);
console.log(`리터럴어레이: ${myIncludes([5,4,3], 5)}`);
*/


// Array.indexOf(searchElement): number
//  배열에서 특정 요소를 검색하고, 해당 인덱스를 반환
//  없으면 `-1`을 반환
let arr = ['홍길동', '둘리', '도우너'];
console.log(arr.indexOf('둘리')); // 1 반환
console.log(arr.indexOf('도우너')); // 2 반환
console.log(arr.indexOf('또치')); // -1 반환


// Array.push(...args): number  ** 원본 변경 **
//  원본 배열에 마지막 요소를 추가하고, 변경된 length를 반환
/*
arr = [1, 2, 3];
let arr2 = arr; // 참조 타입(Reference Type)은 주소가 복사됨. 즉 원본 변경 가능.
let resultArr = arr2.push(5);
console.log(resultArr, arr, arr2);  // 4 [ 1, 2, 3, 5 ] [ 1, 2, 3, 5 ]
*/
/*
arr = [1, 2, 3];
let arr2 = [...arr];    // 원본을 보호하면서 값만 복사하고 [] 배열로.  딥스 0인 것만 값 복사이고 그외 주소복사 주의!
let resultArr = arr2.push(5);
console.log(resultArr, arr, arr2);  // 4 [ 1, 2, 3 ] [ 1, 2, 3, 5 ]
*/
/*
let num = 1;
let num2 = num;   // 원시 타입(Primitive/Value Type) 은 값을 복사함.
num2 = 3;
console.log(num, num2); // 1 3
*/
/*
arr = [1, 2, {key1: 'val1'}];
let arr2 = [...arr];    // 원본을 보호하면서 값만 복사하고 [] 배열로.  딥스 0인 것만 값 복사이고 그외 주소복사 주의!
let resultArr = arr2.push(5, 100, 200);
console.log(resultArr, arr, arr2); // 6 [ 1, 2, { key1: 'val1' } ] [ 1, 2, { key1: 'val1' }, 5, 100, 200 ]
*/

// Array.concat(...args): T[]
//  배열의 마지막 요소를 추가한 새로운 배열을 반환
arr = [1, 2, 3];
resultArr = arr.concat(4, 5, 6);
console.log(arr, resultArr);  // [ 1, 2, 3 ] [ 1, 2, 3, 4, 5, 6 ]


// Array.pop(): T | undefined ** 원본 변경 **
//  원본 배열의 마지막 요소를 제거하고, 제거된 요소를 반환
arr = [1, 2, 8];
resultArr = arr.pop();
console.log(arr, resultArr);  // [ 1, 2 ] 8


// Array.unshift(...args): number ** 원본 변경 **
//  원본 배열의 첫번째 요소를 추가하고, 변경된 length를 반환
arr = [1, 2, 3];
resultArr = arr.unshift(100, 200, 300);
console.log(arr, resultArr);  // [ 100, 200, 300, 1, 2, 3 ] 6


// Array.shift() : T | undefined ** 원본 변경 **
//  원본 배열의 첫번째 요소를 제거하고, 해당 요소를 반환
arr = [1000, 2, 3];
resultArr = arr.shift();
console.log(arr, resultArr);  // [ 2, 3 ] 1000


// Array.splice(start, count, ...args) : T[] ** 원본 변경 **
//  1. start만 전달했을 경우
      // - start 가 양수일 경우
      //   > 해당 인덱스 요소부터 모두 제거하고, 제거한 요소들을 배열로 반환
      // - start 가 음수일 경우
      //   > 끝 요소부터 start 수 만큼의 해당 인덱스 요소를 모두 제거하고, 제거한 요소들을 배열로 반환

/* 
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2);  // start 가 양수일 경우
console.log(arr, resultArr);  // [ 1, 2 ] [ 3, 4, 5 ]
*/
/*
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(-2); // start 가 음수일 경우
console.log(arr, resultArr);  // [ 1, 2, 3 ] [ 4, 5 ]
*/

//  2. start와 count를 전달했을 경우      
      // - 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고,
      //   제거한 요소들을 배열로 반환

arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 2);
console.log(arr, resultArr);  // [ 1, 2, 5 ] [ 3, 4 ]

//  3. start와 count와 args를 전달했을 경우      
      // - 해당 인덱스 요소부터 count 수 만큼의 요소를 제거하고,
      //   해당 위치에 args를 삽입하고, 제거한 요소들을 배열로 반환
arr = [1, 2, 3, 4, 5];
resultArr = arr.splice(2, 1, [100, 200, 300]);
console.log(arr, resultArr); // [ 1, 2, [ 100, 200, 300 ], 4, 5 ] [ 3 ]


// Array.join(separator): String
//  배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
//  배열의 요소가 없으면 빈문자열을 반환
//  separator를 생략하면 기본 구분자가 `,`로 연결
arr = [1, 2, 3, 4, 5];
resultArr = arr.join();
console.log(arr, resultArr);  // [ 1, 2, 3, 4, 5 ] 1,2,3,4,5
console.log(typeof arr, typeof resultArr);  // object string


// Array.sort(): T[] ** 원본 변경 **
//  배열의 요소를 문자열로 변환 후, 오름차순 정렬을 하고 정렬한 배열을 반환
/*
arr = [6, 4, 7, 1, 11];
resultArr = arr.sort(); // 문자로 정렬
console.log(arr, resultArr);  // [ 1, 11, 4, 6, 7 ] [ 1, 11, 4, 6, 7 ]
*/
arr = [6, 4, 7, 1, 11];
//  (a - b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
//  (a - b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
//  (a - b)가 0일 경우, 같은 값으로 인식하여 정렬
resultArr = arr.sort((a, b) => a - b);
console.log(arr, resultArr);  // [ 1, 4, 6, 7, 11 ] [ 1, 4, 6, 7, 11 ]


// Array.map(callback): T[]
//  배열의 모든 요소에 대해 콜백 함수를 반복 실행한 후,
//  콜백 함수의 리턴 값들을 모아서 새로운 배열을 반환
arr = [1, 2, 3, 4, 5, 6];
resultArr = arr.map(val => {
  if(val % 3 === 0) {
    return '짝';
  } else {
    return val;
  }
});
console.log(arr, resultArr);
// [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, '짝', 4, 5, '짝' ]


// map의 작동원리
/*
class MyArr {
  arr = [1, 2, 3, 4, 5, 6];

  map(cb)  {
    // 새로운 배열
    const newArr = [];

    for(let i = 0; i this.arr.length; i++) {
      newArr.push(cb(this.arr[i]));
    }
    return newArr;
  }
}
*/


// Array.some(): boolean
//  배열의 모든 요소에 대해 콜백함수를 실행한 후,
//  조건에 맞는 결과가 하나라도 있으면 true, 없으면 false를 반환
arr = [1, 2, 3, 4, 5, 6];
resultArr = arr.some(val => val === 100);
console.log(arr, resultArr);  // [ 1, 2, 3, 4, 5, 6 ] false

arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 }
];
resultArr = arr.some(item => item.age >= 40);
console.log(arr, resultArr);
// [
//   { name: '홍길동', age: 20 },
//   { name: '둘리', age: 50 },
//   { name: '또치', age: 45 }
// ] true


// Array.every(callback): boolean
//  배열의 모든 요소에 대해 콜백함수를 실행한 후,
//  모두 조건에 맞으면 true, 없으면 false를 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 }
];
resultArr = arr.every(item => item.age >= 20);
console.log(arr, resultArr);
// [
//   { name: '홍길동', age: 20 },
//   { name: '둘리', age: 50 },
//   { name: '또치', age: 45 }
// ] true


// Array.filter(callback): T[]
//  배열의 모든 요소에 대해 콜백함수를 실행한 후,
//  조건에 만족한 요소만 모아서 새로운 배열로 반환
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 }
];
resultArr = arr.filter(item => item.age < 50);
console.log(arr, resultArr);
// [
//   { name: '홍길동', age: 20 },
//   { name: '둘리', age: 50 },
//   { name: '또치', age: 45 }
// ] [ { name: '홍길동', age: 20 }, { name: '또치', age: 45 } ]


// Array.forEach(callback): void
//  배열의 모든 요소에 대해 콜백함수를 반복 실행하고 싶을때 사용
arr = [
  { name: '홍길동', age: 20 },
  { name: '둘리', age: 50 },
  { name: '또치', age: 45 }
];
arr.forEach((val, idx) => {
  // 내가 하고 싶은 처리 
  console.log(val, idx, val.name);
});
// { name: '홍길동', age: 20 } 0 홍길동
// { name: '둘리', age: 50 } 1 둘리
// { name: '또치', age: 45 } 2 또치