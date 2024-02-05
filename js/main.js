window.addEventListener("load", function () {
    // 스크롤 할 때, nav 상단 고정
    window.addEventListener('scroll', function() {
        var nav = document.querySelector('.nav');
        var header = document.querySelector('.header');
        var inner = document.querySelector('.inner');
        var headerHeight = header.offsetHeight;
        
        if (window.pageYOffset >= headerHeight) {
            nav.style.position = 'fixed';
            nav.style.top = '0';
            inner.classList.add('scrolled'); // 클래스 추가
        } else {
            nav.style.position = 'relative';
            nav.style.top = '0';
            inner.classList.remove('scrolled'); // 클래스 제거
        };
    });
});
