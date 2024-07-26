// ScrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEl){
new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
  triggerElement: spyEl, // 화면에 보여짐 여부를 감시할 요소 지정
  triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 (0~1사이 지정)
})

  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show클래스 추가
  .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

modalBtn[0].addEventListener('click', function(){
  // console.log('클릭됨');
  modalEl.style.display = 'flex';
});
closeBtn.addEventListener('click', function(){
  modalEl.style.display = 'none';
});


// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
new Date().getFullYear(); // 현재 연도 정보가 데이터로 반환됨
console.log(new Date().getFullYear());

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();