const parentUl = document.querySelector('#ul');

// 1. ‘사과 게임’ 위에 ‘장기’ 콘텐츠를 가진 li 태그 삽입
// 넣을 위치 지정할 노드 선택
const appleLi = document.querySelector('#apple');
// 새로운 노드(장기 li) 생성
const newKoreanChess = document.createElement('li');
newKoreanChess.textContent = '장기';
// '장기' 노드 삽입
parentUl.insertBefore(newKoreanChess, appleLi);


// 2. ‘어메이징브릭’에 베이지 배경색 추가
const ulChildList = document.querySelectorAll('#ul > li');  // global 스코프
ulChildList.forEach(item => {
  if(item.textContent === '어메이징브릭') {
    item.style.backgroundColor = 'beige';
  }
});


// 3. 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
// ulChildList.forEach((item, key) => {
//   // 인덱스가 0부터 시작하니까 +1해서 사용
//   if((key + 1) % 2 === 0) {
//     item.style.color = 'red';
//   } else {
//     item.style.color = 'blue';
//   }
// });
function setLineColor () {
  try {
    const ulChildList = document.querySelectorAll('#ul > li');  // local 스코프
  
    if(ulChildList && ulChildList.length === 0) {
      throw new Error('노드 없음');
    }

    ulChildList.forEach((item, key) => {
      // 인덱스가 0부터 시작하니까 +1해서 사용
      if((key + 1) % 2 === 0) {
        item.style.color = 'red';
      } else {
        item.style.color = 'blue';
      }
    });

  } catch (err) {
    console.log(err);
  }

}
setLineColor ();


// 요소 추가시 주의 사항
const startcreft = document.createElement('li');
startcreft.textContent = '스타';
parentUl.insertBefore(startcreft, appleLi);
setLineColor ();