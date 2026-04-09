// Date 객체
//  시간과 날짜를 처리하기 위한 속성과 메서드를 가진 내장 객체
//  내부적으로 로컬 타임존에 따른 유닉스 타임스탬프 기반의 동작
//  Local Timezone : 우리나라 UTC asia/seoul
//  UNIX Timestamp : 1970년 1월 1일 0시 0분 0초 기준으로 몇 밀리초 지났냐

const now = new Date();
console.log(now);
// `YYYY-MM-DD hh:mi:ss`  대소문자 구분!
const date1 = new Date('1955-12-17 13:59:36');
console.log(date1);
const date2 = new Date(545652135);
console.log(date2);
const date3 = new Date(1955, 11, 17, 3, 24, 0);
console.log(date3);

// Date.getfullyear(): number
//  연도를 정수로 반환
console.log(now.getFullYear());

// Date.getMonth(): number
//  월를 정수로 반환, 0~ 11의 값을 반환
console.log(now.getMonth() + 1);

// Date.getDate(): number
//  일을 정수로 반환
console.log(now.getDate());

// Date.getHours(): number
//  시간을 정수로 반환
console.log(now.getHours());

// Date.getMinutes(): number
//  분을 정수로 반환
console.log(now.getMinutes());

// Date.getSeconds(): number
//  초를 정수로 반환
console.log(now.getSeconds());

// Date.getMilliseconds(): number
//  밀리초를 정수로 반환
console.log(now.getMilliseconds());

// Date.getDay(): number
//  오늘 요일을 정수로 반환
//  0(일요일)  ~ 6(토요일) 반환
console.log(now.getDay());

// Date.getTime(): number
//  `1970-01-01 00:00:00` 기준으로 얼마나 흘렀는지 Unix 타임스탬프를 반환
// (자바스크립트) 단위: 밀리초
console.log(now.getTime());

let nowFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
console.log(nowFormat);