/* 첫번째 박스슬라이더 버튼 구현 */
$(function(){
  let totalSlides = $('.bxslider li').length;

  let slider = $('.bxslider').bxSlider({
    mode: 'horizontal',
    auto: true,
    pause: 4000,
    speed: 500,
    pager: true,   // 하단 동그라미
    controls: true, // 좌우 버튼
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      $('#slideIndex').text((newIndex + 1) + ' / ' + totalSlides);
    }
});

// 토글 버튼
let isPlaying = true;
$('#toggleBtn').click(function(){
    if (isPlaying) {
      slider.stopAuto();
      $(this).text('▶');
    } else {
      slider.startAuto();
      $(this).text('❚❚');
    }
    isPlaying = !isPlaying;
  });
});

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
  
  window.addEventListener("load", function () {
    const gnb = document.querySelector(".gnb");
    const snb = document.querySelector(".snb-wrap");
    const gnbTop = gnb.offsetTop;
    const gnbHeight = gnb.offsetHeight;
  
    window.addEventListener("scroll", function () {
      if (window.scrollY >= gnbTop) {
        // gnb 고정
        gnb.classList.add("fixed");
  
        // snb 고정, gnb 바로 아래 위치
        snb.style.position = "fixed";
        snb.style.top = gnbHeight + "px";
        snb.style.left = "50%";
        snb.style.transform = "translateX(-50%)";
        snb.style.width = gnb.offsetWidth + "px";
        snb.style.zIndex = "999";
      } else {
        // 원래 상태로 복구
        gnb.classList.remove("fixed");
  
        snb.style.position = "absolute";
        snb.style.top = "";
        snb.style.left = "";
        snb.style.transform = "";
        snb.style.width = "";
        snb.style.zIndex = "";
      }
    });
  });

/* 두번째 박스 슬라이더(카드형) */
$(document).ready(function(){
  $('.bxslider2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true, /* 카드 박스 무한반복 */
      dots: false,
      responsive: [
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2
        }
      }
    ]
  });
});

$(function(){
  $('.close-btn').click(function(){
    $('.sonni').remove();
  });
});


