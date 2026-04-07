// 예시)
// *****
// *****
// *****
// *****
// *****
// let star = '*';
// let sum = '';
//
// 별 생성
// for(let i = 0; i < 5; i++) {
//   sum += star;
// }
//
// 출력
// for(let i = 0; i < 5; i++) {
//   console.log(sum);
// }


// 예시)
// *
// **
// ***
// ****
// *****
// let star = '*';
// let sum = '';
//
// for(let i = 0; i < 5; i++) {
//   // 별 생성
//   sum += star;
//   // 출력
//   console.log(sum);
// }

// for(let i = 0; i < 5; i++) {
//   let star = '';
//   for(let z = 0; z <= i; z++) {
//     star += '*';
//   }
//   console.log(star);
// }


// 예시)
//     *
//    **
//   ***
//  ****
// *****
// let star = '*';     // 별
// let kan = ' ';      // 빈칸
// let sum_kan = '';   // 출력용 빈칸
// let sum_star = '';  // 출력용 별

// for(let i = 0; i < 5; i++) {
//   // 빈칸 생성
//   sum_kan = '';
//   for (let z = 0; z < (4 - i); z++) {
//     sum_kan = sum_kan + kan;
//   }
//
//   // 별 생성
//   sum_star = sum_star + star;
//
//   // 출력
//   console.log(sum_kan + sum_star);
// }

// for(let i = 0; i < 5; i++) {
//   let space = '';  
//   for(let z = 4; z > i; z--) {
//     space += ' ';
//   }  

//   let star = '';
//   for(let y = 0; y <= i; y++) {
//     star += '*';
//   }

//   console.log(`${space}${star}`);
// }