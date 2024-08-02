// ScrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelectorAll('.btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

modalBtn[0].addEventListener('click', function () {
  console.log('클릭됨');
  modalEl.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear()); // 현재 연도 정보가 숫자 데이터로 반환됨

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동

let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  console.log(window.scrollY); // Y축 스크롤 위치 확인

  // 페이지 스크롤 위치가 500px을 넘으면 요소를 보여주고,
  // 500px을 넘지 않으면 요소 숨기기

  if (scrollY > 500) {
    toTopBtn.style.opacity = '1'
    toTopBtn.style.transform = 'translateX(0)';
  } else {
    toTopBtn.style.opacity = '0'
    toTopBtn.style.transform = 'translateX(100px)';
  }
});
$(document).ready(function(){
    
  var mainCtr = $("#main-ctr"),
      lEye = $("#l-eye"),
      rEye = $("#r-eye"),
      mouth = $("#mouth"),
      hpLove = $("#hp-love"),
      button = $("button");
  
  // animatable var
  
  var wkREye = "#wk-r-eye",
      wkLEye = "#wk-l-eye",
      smMouth1 = "#sm-mouth-1",
      smMouth2 = "#sm-mouth-2",
      smMouth3 = "#sm-mouth-3",
      stREye = "#st-r-eye",
      stLEye = "#st-l-eye",
      rgREye = "#rg-r-eye",
      rgLEye = "#rg-l-eye",
      hgREye = "#hg-r-eye",
      hgLEye = "#hg-l-eye",
      stMouth = "#st-mouth",
      rgMouth = "#rg-mouth";
  
  var tl = new TimelineMax({});
  tl.timeScale(1.25);

standardAnim
function standardAnim(){
  tl
    .to([lEye, rEye], .15, {
      delay: .6,
      scaleY: 0, transformOrigin: "center center",
    })
    .to([lEye, rEye], .15, {
      scaleY: 1
    })
    .to([lEye, rEye], .15, {
      scaleY: 0, transformOrigin: "center center",
    })
    .to([lEye, rEye], .15, {
      scaleY: 1
    })
    .to([lEye, rEye, mouth], .3, {
      x: "-5px"
    })
    .to([lEye, rEye], .15, {
      scaleY: 0, transformOrigin: "center center",
    })
    .to([lEye, rEye], .15, {
      scaleY: 1
    })
    .to([lEye, rEye, mouth], .3, {
      x: "10px"
    })
    .to([lEye, rEye], .15, {
      scaleY: 0, transformOrigin: "center center",
    })
    .to([lEye, rEye], .15, {
      scaleY: 1
    })
    .to([lEye, rEye, mouth], .3, {
      x: "0px"
    })
}

standardAnim();
  
button.on("click", function(){
  var className = $(this).text();
  mainCtr.attr("class", className);
  
  $(this).addClass("active").siblings().removeClass("active");
  
  if(mainCtr.hasClass("standard")) {
    standard();
    standardAnim();
  }

  if(mainCtr.hasClass("wink")) {
    wink();
    smAnim();
  }

  if(mainCtr.hasClass("happy")) {
    happy();
    smAnim();
  }

  if(mainCtr.hasClass("rage")) {
    raging();
  }
  });
});
