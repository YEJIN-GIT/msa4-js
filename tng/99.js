//------------------------------------------------------
// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.
// 1. '다음'버튼을 누르면 다음 페이지를 3개 가져옵니다.
//   1-1. 다음 페이지를 가져올때 기존 데이터는 지워지지 않습니다.
//   1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.
// 2. '리셋'버튼을 누르면 모든 카드가 초기화 됩니다.
//   2-1. 리셋 후 '다음'버튼을 누르면 첫 페이지부터 불러옵니다.
// 3. 사용하는 API는 아래와 같습니다.
//   - baseUrl : https://picsum.photos/v2/list
//   - prameters :
//     page : number
//     limit : number
//------------------------------------------------------


// 0. 페이지 처음 로드시 카드는 아무것도 없습니다.
// 1. '다음'버튼을 누르면 다음 페이지를 3개 가져옵니다.
//   1-1. 다음 페이지를 가져올때 기존 데이터는 지워지지 않습니다.

let page = 0;
const btnNext = document.querySelector('.btnNext');
const btnInit = document.querySelector('.btnInit');

// 다음 클릭
btnNext.addEventListener('click', async () => {

  const container = document.querySelector('.container');

  // 3. 사용하는 API는 아래와 같습니다.
  //   - baseUrl = 'https://picsum.photos/v2/list?page=4&limit=5';
  //   - prameters
  //     page number
  //     limit number

  page += 1;
  const limit = 3;
  const baseUrl = 'https://picsum.photos/v2/list?';
  const url = `${baseUrl}page=${page}&limit=${limit}`;
  console.log(url);

  try {
    //   1-2. 새로 가져온 데이터는 가장 뒤에 순서대로 삽입됩니다.

    const response = await axios.get(url);

    response.data.forEach( item => {
      // 카드 이미지 요소 생성
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');
      
      // 카드 저작권자 요소 생성
      const newAuthor = document.createElement('spon');
      newAuthor.textContent = `${item.id}: ${item.author}`;
      
      // 카드 요소 생성
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);
  
      // 컨테이터에 카드 삽입
      container.appendChild(newCard);      
    });
    
  } catch (error) {
    console.log(error);
  }


});


// 2. '리셋'버튼을 누르면 모든 카드가 초기화 됩니다.

// 초기화 클릭
btnInit.addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.textContent = '';

  //   2-1. 리셋 후 '다음'버튼을 누르면 첫 페이지부터 불러옵니다.
  page = 0;
});





