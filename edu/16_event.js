// Event 이벤트
// 웹페이지에서 유저의 행위에 따라 특정 처리를 실행 되도록 하는 처리


// inline 방식
// 이벤트 대상인 요소의 속성으로 이벤트를 지정하는 방법
// HTML문서에 JS가 혼재되므로 관리상의 문제가 발생


// property Listener 방식
// DOM을 이용해서 해당 노드에 이벤트 프로퍼티를 통해 지정하는 방법
// (기존 inline방식을 덮어 쓰버리는 문제)
// const btn1 = document.querySelector('button');
// btn1.onclick = () => {
//   alert('프로퍼티 리스너');
// }


// addEventListener 방식
// DOM 요소에 이벤트 리스너를 추가하는 가장 현재적인 방법으로 권장
// 동일한 이벤트를 여러번 사용 가능
const btnNow = document.querySelector("#btnNow");
btnNow.addEventListener('click', () =>  {
  alert('첫번째 클릭 이벤트');  // ('확인'버튼 누르기 전까지 대기하고 있다!)
});
btnNow.addEventListener('click', () =>  {
  alert('두번째 클릭 이벤트');
});

// window.addEventListener('scroll', () => {
//   console.log(' 스크롤 실행');
// });
window.addEventListener('scroll', printScroll);

// removeEventListener
// DOM 요소에 추가된 이벤트를 제거하는 방법
//window.removeEventListener('scroll', printScroll);
// 실습 : 처음에는 스크롤 이벤트가 살아 있다가,
//  삭제 버튼을 눌렀을 때, window의 스크롤 이벤트가 제거되도록 수정해 봅시다.
const btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', () => {
  window.removeEventListener('scroll', printScroll);
});

function printScroll() {
  console.log(' 스크롤 실행');
}


// 이벤트 객체
// 이벤트가 발생했을 때 해당 이벤트에 대한 정보를 포함하는 객체
const btnObj = document.querySelector('#btnObj');
btnObj.addEventListener('click', e => {
  console.log(e);
  e.target.textContent = 'XXXXX';
});

function eventInfomation(e) {
  console.log(e);
}
const container = document.querySelector('.container');
container.addEventListener('scroll', eventInfomation);