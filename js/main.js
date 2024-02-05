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
  });

  // swiper적용
  const swiper = new Swiper(".sw-visual", {
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1000,
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
  });
});
