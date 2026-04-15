const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 기존 이벤트 취소
  
  const baseUrl = 'https://picsum.photos/v2/list';
  const page = form.page.value;  // form태그 안에 id가 'page'인 요소를 가져옴
  const limit = form.limit.value;

  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);  // await로 결과가 돌아올때까지 기다린다!

    // 카드들 넣을 컨테이너
    const container = document.querySelector('.container');
    container.textContent = '';  
    
    // response.data: 서버가 보내온 데이터가 저장된 프로퍼티
    response.data.forEach(item => {    
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
    
  } catch(error) {
    console.log(error);
  }

});