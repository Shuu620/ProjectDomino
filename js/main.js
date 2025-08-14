//헤더 GNB 메뉴창 더보기▼ 눌렀을 때 슬라이드, 화살표 회전 구현
$(function () {
    const checkbox = $('#snb-more');
    const snbWrap = $('.snb-wrap');
    const arrow = $('.more-label .arrow');

    snbWrap.hide(); // 더보기 메뉴 기본 숨김

    checkbox.change(function () {
        if (this.checked) {
        snbWrap.stop().slideDown(300);
        arrow.css('transform', 'rotate(-135deg)');
        } else {
        snbWrap.stop().slideUp(300);
        arrow.css('transform', 'rotate(45deg)');
        }
    });
});

// 헤더 GNB 스크롤바 조정시 상단 고정
window.addEventListener("load", function () {
    const gnb = document.querySelector(".gnb");
    const gnbTop = gnb.offsetTop;
  
    window.addEventListener("scroll", function () {
      if (window.scrollY >= gnbTop) {
        gnb.classList.add("fixed");
      } else {
        gnb.classList.remove("fixed");
      }
    });
  });