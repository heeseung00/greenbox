window.addEventListener("load", function () {

 // ===== top으로 가는 버튼
 const topBtn = document.getElementById("topBtn");
 topBtn.addEventListener("click", function (event) {
   event.preventDefault();
   // 조건문 수정
   if (window.scrollY === 0) {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   } else {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   }
 });

 // ===== chat 버튼 클릭
 const chatBtn = document.getElementById("chatBtn");
 const chatTextBox = document.querySelector(".chat-text-box");

 chatBtn.addEventListener("click", function (event) {
   // chat-text-box의 display 속성을 토글하여 나타내거나 숨김
   if (
     chatTextBox.style.display === "none" ||
     chatTextBox.style.display === ""
   ) {
     chatTextBox.style.display = "block";
   } else {
     chatTextBox.style.display = "none";
   }
 });

 // ===== visual swiper적용
 const swiper = new Swiper(".sw-visual", {
  loop: true,
  // 슬라이드의 모션 속도를 transition 맞춘다.
  speed: 900,
  autoplay: {
    delay: 2500,
    // 사용자가 마우스 클릭 드래그로 이동하면
    // 아래 구문이 없으면 autoplya 가 해제되므로
    // 이것을 방지해 주기위한 처리
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".sw-visual-next",
    prevEl: ".sw-visual-prev",
  },
  centeredSlides: true, // 추가
  slidesPerView: "auto", // 추가
});



  // ===== 스크롤 할 때, nav 상단 고정
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav");
    var header = document.querySelector(".header");
    var inner = document.querySelector(".inner");
    var headerHeight = header.offsetHeight;

    if (window.pageYOffset >= headerHeight) {
      nav.style.position = "fixed";
      nav.style.top = "0";
      inner.classList.add("scrolled"); // 클래스 추가
    } else {
      nav.style.position = "relative";
      nav.style.top = "0";
      inner.classList.remove("scrolled"); // 클래스 제거
    }
    inner.classList.add("inner"); // .inner 클래스 추가
  });

  //===== nav 마우스 오버, 마우스아웃 효과
  document.querySelector(".gnb").addEventListener("mouseover", function () {
    // 모든 .depth2-wrap을 보이게 함
    const depth2 = document.querySelectorAll(".depth2");
    const navBg = document.querySelector(".nav-bg");
    depth2.forEach(function (depth2) {
      depth2.style.display = "block";
    });
    navBg.style.display = "block";
  });
  document.querySelector(".gnb").addEventListener("mouseout", function () {
    // 모든 .depth2-wrap을 감춤
    const depth2 = document.querySelectorAll(".depth2");
    const navBg = document.querySelector(".nav-bg");
    depth2.forEach(function (depth2) {
      depth2.style.display = "none";
    });
    navBg.style.display = "none";
  });
  
  // ===== top-banner 닫기
  var topBanner = document.querySelector(".top-banner");
  var topBannerClose = document.querySelector(".top-banner-close")

  topBannerClose.addEventListener("click", function (event) {
    if (topBanner.style.display === "none" || topBanner.style.display === "") {
      topBanner.style.display = "none";
    } else {
      topBanner.style.display = "block";
    }
  });

  // ===== 모달창 닫기
  const modalClose = document.getElementById("modalClose");
  const allClose = document.getElementById("modalWrap");

  modalClose.addEventListener("click", function (event) {
    if (allClose.style.display === "none" || allClose.style.display === "") {
      allClose.style.display = "";
    } else {
      allClose.style.display = "none";
    }
  });

  //모달창 '오늘 하루 보지 않기' 클릭
  document.getElementById("modalToday").addEventListener("click", function () {
    // 현재 날짜와 시간을 기록
    const currentDate = new Date().toLocaleString();
    // sessionStorage에 'hideModal'을 현재 날짜와 시간으로 저장
    sessionStorage.setItem(
      "hideModal",
      JSON.stringify({ value: true, datetime: currentDate })
    );

    // #modalWrap에 스크롤을 없앰
    document.getElementById("modalWrap").style.overflowY = "hidden";
    // 모달창을 숨김
    document.getElementById("modalWrap").style.display = "none";
  });

  // 닫기 버튼 클릭 시
  document.getElementById("modalClose").addEventListener("click", function () {
    // #modalWrap의 스타일 초기화하여 세로 스크롤을 허용
    document.getElementById("modalWrap").style.overflowY = "visible";
    // 모달창을 숨김
    document.getElementById("modalWrap").style.display = "none";
  });

  // 페이지 로드 시 모달 상태 확인
  window.onload = function () {
    const modalWrap = document.getElementById("modalWrap");
    const storedData = JSON.parse(sessionStorage.getItem("hideModal"));

    if (storedData && storedData.value) {
      // 현재 시간과 저장된 시간 차이를 계산 (밀리초 단위)
      const timeDifference =
        new Date().getTime() - new Date(storedData.datetime).getTime();
      // 24시간(밀리초 기준)가 지났거나, 새로고침을 했을 경우
      if (
        timeDifference >= 24 * 60 * 60 * 1000 ||
        (window.performance && window.performance.navigation.type === 1)
      ) {
        sessionStorage.removeItem("hideModal");
      } 
    };

  };

});



  // ===== visual swiper적용
  const swiper = new Swiper(".sw-visual", {
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 900,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    centeredSlides: true, // 추가
    slidesPerView: "auto", // 추가
  });

// ======= review swiper적용
const reviewSwiper = new Swiper(".review-inner", {
  loop: true,
  // 슬라이드의 모션 속도를 transition 맞춘다.
  speed: 900,
  autoplay: {
    delay: 2500,
    // 사용자가 마우스 클릭 드래그로 이동하면
    // 아래 구문이 없으면 autoplya 가 해제되므로
    // 이것을 방지해 주기위한 처리
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".sw-review-next",
    prevEl: ".sw-review-prev",
  },
  centeredSlides: true, // 추가
  slidesPerView: "auto", // 추가
});
});

