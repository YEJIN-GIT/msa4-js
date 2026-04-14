// -------------------------
// 함수 모음
// -------------------------
const randomPosition = () => {
  // -- 보너스 문제 --
  // 다시 숨을 때 랜덤한 위치로 이동
  const container = document.querySelector('.container');  //const box = document.querySelector('.box');

  const randomX = Math.floor(Math.random() * (window.innerWidth - container.offsetWidth));    //const randomX = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - container.offsetHeight));  //const randomY = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));

  container.style.top = `${randomY}px`;   // box.style.top = `${randomY}px`;
  container.style.left = `${randomX}px`;  // box.style.left = `${randomX}px`;
};

const setRandomBoxBackgroundColor = (element) => {
  // 리얼 보너스 : 박스에 랜덤 색상 부여하기
  const randomRed = Math.round(Math.random() * 255);
  const randomGreen = Math.round(Math.random() * 255);
  const randomBlue = Math.round(Math.random() * 255); 
  
  element.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
};

const dokidoki = () => {  // 함수 표현식은 호이스팅 되지 않으므로 상단에 위치하도록!
  alert('두근두근');
};

const hide = () => {
    const box = document.querySelector('.box');
    const container = document.querySelector('.container'); 

    alert('숨는다');
    box.classList.remove('busted');
    randomPosition(); // 랜덤 위치 설정
    
    // 숨는다 클릭 이베트 제거
    box.removeEventListener('click', hide);
    
    // 들켰다 클릭 이벤트 추가
    box.addEventListener('click', busted);

    // 박스 색상 제거
    box.style = '';

    // 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
    // 	- 두근두근
    container.addEventListener('mouseenter', dokidoki); //box.addEventListener('mouseenter', dokidoki);
  };

const busted = () => {
  const box = document.querySelector('.box');
  const container = document.querySelector('.container'); 

  box.classList.add('busted');
  // 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.
  container.removeEventListener('mouseenter', dokidoki); //box.removeEventListener('mouseenter', dokidoki);  // confirm('들켰다'); // 확인,취소 버튼 클릭시 ture,fasle로 리턴
  
  // 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
  // 	- 숨는다
  box.addEventListener('click', hide);

  // 들켰다 클릭이벤트 제거
  box.removeEventListener('click', busted);

  // 보너스: 랜덤 배경색 지정
  setRandomBoxBackgroundColor(box);

  alert('들켰다');
};

// -------------------------
// 로직 모음
// -------------------------
// 스코프 보호 위해 즉시 실행 함수 (() => {})(); 를 활용하자!
(() => {
  randomPosition(); // 랜덤 위치 설정

  // 1.`버튼` 클릭시 아래 문구 알러트로 출력
  // 	안녕하세요.
  // 	숨어있는 div를 찾아주세요.
  const btnInfo = document.querySelector('button');
  btnInfo.addEventListener('click', () => {
    alert('안녕하세요. \n숨어있는 div를 찾아주세요.');
  });
  
  // 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
  // 	- 두근두근
  const container = document.querySelector('.container');  
  container.addEventListener('mouseenter',dokidoki);
  
  // 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
  // 	- 들켰다
  const box = document.querySelector('.box');
  box.addEventListener('click', busted);
})();

// 두근두근의 영역이 실제로는 박스가 아니었다.
// - 박스의 일정 근처(외곽)에 오면 두근두근이었다.Math

// 우리의 모든 이벤트는 박스에 들어가 있다.