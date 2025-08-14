$(function () {
  const $gnbWrap = $('.gnb-wrap'); // GNB 전체를 감싸는 랩퍼
  // GNB가 상단에 고정되기 시작할 기준점 (페이지 상단으로부터의 거리)
  // 페이지 로드 시 GNB의 초기 위치를 저장해둬!
  let gnbOffsetTop = $gnbWrap.offset().top; 
  
  const checkbox = $('#snb-more'); // '더보기' 체크박스 (숨겨진 input)
  const snbWrap = $('.snb-wrap'); // '더보기' 메뉴 전체를 감싸는 랩퍼
  const arrow = $('.more-label .arrow'); // '더보기' 버튼 옆 화살표 아이콘

  // 페이지 로드 시 '더보기' 메뉴는 일단 숨겨놔야 해!
  snbWrap.hide();

  // '더보기' 메뉴의 위치를 GNB 바로 아래에 정확히 맞춰주는 함수야!
  function adjustSnbPosition() {
    let gnbBottomPosition; // GNB의 하단 위치를 저장할 변수

    // 만약 GNB 랩퍼에 'fixeds' 클래스가 붙어있으면 (GNB가 상단에 고정되어 있으면)
    if ($gnbWrap.hasClass('fixeds')) {
      // GNB는 화면 상단(top: 0)에 고정되어 있으니까,
      // '더보기' 메뉴는 GNB의 높이만큼 아래에 위치해야 해!
      gnbBottomPosition = $gnbWrap.outerHeight();
    } else {
      // GNB가 아직 고정되지 않고 원래 위치에 있다면,
      // '더보기' 메뉴는 GNB의 원래 위치 + GNB 높이만큼 아래에 위치해야 해!
      gnbBottomPosition = $gnbWrap.offset().top + $gnbWrap.outerHeight();
    }
    // 계산된 'top' 값을 '더보기' 메뉴의 CSS에 적용해줘!
    snbWrap.css('top', gnbBottomPosition + 'px');
  }

  // '더보기' 체크박스의 상태가 변할 때 (클릭해서 열거나 닫을 때)
  checkbox.change(function () {
    if (this.checked) { // 체크박스가 '체크'되면 (더보기 메뉴를 열어야 할 때)
      adjustSnbPosition(); // 먼저 '더보기' 메뉴의 위치를 GNB 아래로 맞춰주고
      snbWrap.show(); // '더보기' 메뉴를 화면에 보여줘!
      arrow.css('transform', 'rotate(-135deg)'); // 화살표 방향도 위로 돌려줘!
    } else { // 체크박스가 '체크 해제'되면 (더보기 메뉴를 닫아야 할 때)
      snbWrap.hide(); // '더보기' 메뉴를 숨겨줘!
      arrow.css('transform', 'rotate(45deg)'); // 화살표 방향도 원래대로 아래로 돌려줘!
    }
  });

  // 윈도우 스크롤 이벤트가 발생할 때마다!
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop(); // 현재 스크롤된 페이지 상단 위치를 가져와!
    // 현재 스크롤 위치가 GNB가 고정되어야 할 기준점보다 크거나 같으면 'true'
    const shouldBeFixed = scrollTop >= 1;

    // GNB 랩퍼에 'fixeds' 클래스를 붙이거나 떼어서 고정 효과를 줘!
    // shouldBeFixed가 true면 'fixeds' 클래스 추가, false면 제거
    $gnbWrap.toggleClass('fixeds', shouldBeFixed);

    // 만약 '더보기' 메뉴가 현재 열려있는 상태라면 (체크박스가 체크되어 있다면)
    if (checkbox.prop('checked')) {
      // 스크롤될 때마다 '더보기' 메뉴의 위치를 다시 계산해서 GNB 아래에 붙도록 해줘!
      // 이렇게 해야 GNB가 고정되거나 움직일 때 '더보기' 메뉴도 같이 따라와!
      adjustSnbPosition();
    }
  });

  // 윈도우 크기가 변경될 때 (예: 브라우저 창 크기 조절)
  $(window).on('resize', function () {
    // GNB가 고정될 기준점(gnbOffsetTop)을 다시 계산해줘!
    // 화면 크기가 변하면 요소들의 위치도 바뀔 수 있으니까!
    gnbOffsetTop = $gnbWrap.offset().top;
    
    // 만약 '더보기' 메뉴가 열려있으면, 리사이즈 후에도 위치를 다시 맞춰줘!
    if (checkbox.prop('checked')) {
        adjustSnbPosition();
    }
  });
});