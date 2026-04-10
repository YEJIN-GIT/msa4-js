/**- - ‘사과 게임’ 위에 ‘장기’ 콘텐츠를 가진 li 태그 삽입
- ‘어메이징브릭’에 베이지 배경색 추가
- 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정 */



// 사과 게임 위에 장기 삽입
const parentUl = document.querySelector('#ul'); // 부모노드
const appleIl = document.querySelector('#apple'); //사과게임

const newIl = document.createElement('li'); // 장기
newIl.textContent = '장기';
parentUl.insertBefore(newIl, appleIl);


// 어메이징브릭에 베이지 배경색 추가
const allLi = document.querySelectorAll('#ul > li');

//const brix = allLi[ allLi.length - 1 ];
// for(let i = 0; i < allLi.length; i++) {
//   if('어메이징브릭' === allLi[i].textContent){
//     brix = allLi[i];  // 어메이징브릭
//   }
// }
allLi.forEach(item => {
  if('어메이징브릭' === item.textContent){  // 어메이징브릭
    item.style.backgroundColor = '#f0965a';
  }
});


// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
allLi.forEach((item, i) => {
  if((i + 1) % 2 === 0){    
    item.style.color ='#f70303';
  } else {
    item.style.color ='#1b03f7'
  }
});