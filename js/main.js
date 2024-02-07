window.addEventListener("load", function () {
  // 스크롤 할 때, nav 상단 고정
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

  //nav 마우스 오버, 마우스아웃 효과
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

  // top으로 가는 버튼
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

  //chat 버튼 클릭
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

  // visual swiper적용
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
});
