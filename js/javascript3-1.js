
function count(type) {
  const resultElement = document.getElementById('result');
  let number = parseInt(resultElement.innerText);

  if (type === 'plus') {
    number += 1;
  } else if (type === 'minus' && number > 1) {
    number -= 1;
  }

  resultElement.innerText = number;
  updateTotalPrice(); 
}

function updateTotalPrice() {
  const quantity = parseInt(document.getElementById('result').innerText);

  const mainRadio = document.querySelector('input[name="main"]:checked');
  const sideRadio = document.querySelector('input[name="side"]:checked');

  const mainPrice = mainRadio ? parseInt(mainRadio.value) : 0;
  const sidePrice = sideRadio ? parseInt(sideRadio.value) : 0;

  // ✅ 수정된 공식 (side는 수량과 무관하게 1개만 적용)
  const total = (mainPrice * quantity) + sidePrice;

  document.getElementById('total').innerText = total.toLocaleString();
}

// 이벤트 연결: 라디오 버튼 클릭 시 자동 계산
document.addEventListener('DOMContentLoaded', function () {
  const allRadios = document.querySelectorAll('input[type="radio"]');

  allRadios.forEach(radio => {
    radio.addEventListener('change', updateTotalPrice);
  });

  updateTotalPrice(); 

});
