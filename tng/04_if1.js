let num = 55;   // 당신의 점수
let rank = 'F'; // 등급

if(num > 100 || num < 0 || typeof num !== 'number') {
  console.log('입력값 오류');
} else {
  if(num === 100) {
    rank = 'A+';
  } else if(num >= 90) {
    rank = 'A';
  } else if(num >= 80) {
    rank = 'B';
  } else if(num >= 70) {
    rank = 'C';
  } else if(num >= 60) {
    rank = 'D';
  } else {
    rank = 'F';
  }
  
  console.log(`당신의 점수는 ${num}점 입니다. <${rank}>`);
}