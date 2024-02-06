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

  //nav slidedown, slideup 효과
  document.addEventListener("DOMContentLoaded", function () {
    // 모든 .gnb a 요소를 가져옵니다.
    const gnbLinks = document.querySelectorAll(".gnb");

    // 각 .gnb a 요소에 대한 이벤트 리스너를 추가합니다.
    gnbLinks.forEach(function (link) {
      link.addEventListener("mouseover", function () {
        // mouseover 이벤트가 발생했을 때 처리할 코드
        link.parentNode.querySelector(".depth2").classList.add("slideDown");
        link.parentNode.parentNode.parentNode.classList.add("beforeVisible");
      });

      link.addEventListener("mouseleave", function () {
        // mouseleave 이벤트가 발생했을 때 처리할 코드
        link.parentNode.querySelector(".depth2").classList.remove("slideDown");
        link.parentNode.parentNode.parentNode.classList.remove("beforeVisible");
      });
    });
  });

  // // display 이용
  // document.addEventListener("DOMContentLoaded", function () {
  //   const gnbLinks = document.querySelectorAll(".gnb a");

  //   gnbLinks.forEach(function (link) {
  //     link.addEventListener("mouseover", function () {
  //       link.parentNode.querySelector(".depth2").style.display = "block";
  //       document.querySelector(".nav::before").style.display = "block";
  //     });

  //     link.addEventListener("mouseleave", function () {
  //       link.parentNode.querySelector(".depth2").style.display = "none";
  //       document.querySelector(".nav::before").style.display = "none";
  //     });
  //   });
  // });

  // // visual swiper적용
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
