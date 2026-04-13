const btnInfo = document.querySelector('.btnInfo');
const findDiv = document.querySelector('.findDiv');

findDiv.style.backgroundColor= 'transparent';

// 랜덤 위치 이동
function gogo() {  
  let x = Math.random() * (window.innerWidth - 300);
  let y = Math.random() * (window.innerHeight - 300);
  // console.log(x, y);
  // console.log(Math.floor(x), Math.floor(y));
  
  findDiv.style.left = x + "px";
  findDiv.style.top = y + "px";
}

function dugun() {
  alert('두근두근');
}

// 1.`버튼` 클릭시 아래 문구 알러트로 출력
// 	안녕하세요.
// 	숨어있는 div를 찾아주세요.
btnInfo.addEventListener('click', () => {  
  alert('안녕하세요. 숨어있는 div를 찾아주세요.');
});


// 2. 숨어있는 div에 마우스가 진입하면 아래 문구 알러트 출력
// 	- 두근두근
findDiv.addEventListener('mouseenter', dugun);


findDiv.addEventListener('click', () => {
  if(findDiv.style.backgroundColor === 'transparent') {
    // 3. 숨어있는 div를 마우스로 클릭하면 아래 문구 알러트 출력 및 나타나기
    // 	- 들켰다
    alert('들켰다');
    findDiv.style.backgroundColor = 'aquamarine';
  
    // 4. 들킨 div에는 마우스가 진입해도 두근두근이 뜨지 않습니다.
    findDiv.removeEventListener('mouseenter', dugun);   
  } else {
    // 5. 나타난 div를 다시 클릭하면 아래 문구 알러트 출력 및 사라지기
    // 	- 숨는다
    alert('숨는다');
    findDiv.style.backgroundColor = 'transparent';
    
    // 6. 다시 숨은 div에 마우스가 진입하면 아래 문구 알러트 출력
    // 	- 두근두근
    findDiv.addEventListener('mouseenter', dugun);

    // 다시 숨을 때 랜덤한 위치로 이동
    gogo();
  }  
});