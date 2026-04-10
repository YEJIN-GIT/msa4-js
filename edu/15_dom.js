// ---------------------------------
// 요소 선택
// ---------------------------------

// document.getElementById(): 요소의 ID로 선택
const titleEle = document.getElementById('title');
titleEle.style.color = 'blue';

// document.getElementByTagName(tagName): 요소의 태그명으로 선택
//  해당 요소들을 HTMLCollection 객체로 획득하나 요즘 잘 안씀.
const tagEle = document.getElementsByTagName('h1');
for(let i = 0; i < tagEle.length; i++) {
  tagEle[i].style.color = 'red';
}


// document.getElementsByClassName(ClassName): 클래스로 요소를 선택
// 해당 요소들을 TMLCollection 객체로 획득하나 요즘 잘 안씀.
const classEle = document.getElementsByClassName('title2');

// ** 매우 중요 **
// document.querySelector(selector): CSS 선택자를 사용해 요소를 찾는 메소드
//  선택된 요소가 복수일 경우, 가장 첫번째 요소만 선택
const queryId = document.querySelector('#title');
queryId.style.color = 'skyblue';

const queryType = document.querySelector('h1');
queryType.style.color = 'green';

// document.querySelectorAll(selector): CSS 선택자를 사용해 요소를 찾는 메소드
//  선택된 요소가 복수일 경우, 전부 선택
//  해당 요소들을 NodeList 객체로 획득
const queryAll = document.querySelectorAll('h1');
queryAll.forEach(item => {
  item.style.fontSize = '5rem';
});

// ---------------------------------
// 요소 조작
// ---------------------------------

// Element.textContent: 컨텐츠를 획득 및 변경
//  순수한 텍스트 데이터를 전달
const title1 = document.querySelector('#title');
title1.textContent; // 콘텐츠 접근
title1.textContent = '테스트'; // 콘텐츠 변경
title1.textContent = '<p>피테그</p>'; // <p>피테그</p>
// Element.innerHTML: 컨텐츠를 획득 및 변경
// 태그는 태그로 인식해서 전달
title1.innerHTML = '<p>피테그</p>';   // 피테그

// Element.setAttribute(attributeName, value): 요소의 속성 값을 추가
const setAttrInput = document.querySelector('.set-attr');
setAttrInput.setAttribute('placeholder', 'js에서 추가');
setAttrInput.setAttribute('style', 'color : red');

// Element.removeAttribute(attributeName): 요소의 특정 속성을 제거
setAttrInput.removeAttribute('placeholder');

// ---------------------------------
// 요소 스타일링
// ---------------------------------
// Element.style: 요소에 인라인 스타일을 추가
title1.style.color = 'red';

// Element.classList: DOMTokekList 객체로 클래스를 제어
title1.classList.add('display-none', 'test'); // 클래스 추가
title1.classList.remove('display-none');      // 클래스 제거
title1.classList.toggle('display-none');      // 클래스 토글

// ---------------------------------
// 새로운 요소 생성
// ---------------------------------
// document.createElement(TagName): 해당 tag요소 생성
const newP = document.createElement('p');
newP.textContent = '탕수육';
newP.style.color = '#c111e4';


// Node.appendChild(node)
// 해당 부모노드의 가장 마지막 자식 노드로 추가
const parentContainer = document.querySelector('.container');
parentContainer.appendChild(newP);

const newSpan = document.createElement('span');
newSpan.textContent = '크림새우';
parentContainer.appendChild(newSpan);

// Node.insertBefore(newNode, referenceNode);
const newH3 = document.createElement('h3');
newH3.textContent = '짬뽕';
parentContainer.insertBefore(newH3, newSpan);

// Node.removeChild(node);
//  해당 부모 노드의 특정 자식 노드를 제거
parentContainer.removeChild(newH3);
