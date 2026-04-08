// 스코프: 변수나 함수의 유효범위
//  어디에 선언되었는지에 따라서 접근 가능 여부가 달라진다.

// 전역 스코프 (Global scope)
//  전역 스코프로 선언된 변수와 함수는 코드 어디에서나 접근 가능
//  프로그램이 실행되는 동안 계속 유지
let test = '전역 스코프'; // Global Scope

function output() {
  // 지역 스코프 (Local Scope)
  //  함수 내에서 선언 된 변수와 함수는 해당 함수 내부에서 유효
  //  함수가 실행될 때마다 새로운 지역 스코프가 생성
  let test = '지역 스코프'; // let은 같은 scope 중목 불가하고, 각자의 영역에서 let test !!

  if(true) {
    // 블록레벨 스코드 (Block Level Scope)
    //  `{}`로 둘러 싸인 범위를 의미
    let test = '블록레벨 스코프';
    console.log(test);
  }
  console.log(test);    // Local Scope
}

output();
// '블록레벨 스코프' 출력
// '지역 스코프' 출력
console.log(test);
// '전역 스코프' 출력