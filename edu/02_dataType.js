// 데이터 타입: 여러 종류의 데이터를 식별하는 분류 체계
// JS는 하나의 변수에 어떤 타입의 데이터도 저장 가능
let num1 = 1;
num1 = 'ttt';


// number: 숫자
let num = 1;
console.log(typeof num);

// string: 문자열
let str1 = '문자열';
let str2 = "문자열";
let str3 = `문자열${num}`;  // 템플릿 리터럴: 여러 변수에 저장된 값을 이용해서 문자열을 합칠때 사용함
console.log(str3);

let id ='아이디';
let pw = '비밀번호';
let msg = '가 틀렸습니다.';

// boolean: 논리(참/거짓)
let bool1 = true;
let bool2 = false;

// undefind: 변수 선언했는데 값이 할당되지 않은 상태 (시스템의 선택)
let undefindVal;

// null: 변수에 값이 없음을 의도적으로 명시한 데이터 타입 (개발자의 선택)
let nullVal = null;

// Symbol: 절대 중복되지 않는 원시 타입 (primitive Type)
const symbol1 = Symbol('test');

// Object (객체): 키(key)- 값(value)을 쌍으로 저장하는 reference Type
let obj = {
  key1: 'val1',
  key2: 1
};
console.log(obj.key1);