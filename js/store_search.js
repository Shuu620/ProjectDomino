// ✅ On/Off 스위치 텍스트 변경
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("discountToggle");
  const text = document.querySelector(".store_search_switch_text");

  if (toggle && text) {
    toggle.addEventListener("change", function () {
      text.textContent = this.checked ? "ON" : "OFF";
    });
  }
});

/* // ✅ 카카오 지도 초기화
function initMap() {
  var container = document.getElementById("store_search_map");
  var options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3,
  };
  new kakao.maps.Map(container, options);
}

// ✅ 카카오 맵 API 로드 완료되었을 때 실행
window.onload = function () {
  if (window.kakao && window.kakao.maps) {
    initMap();
  }
};

// ✅ toggle 함수 정의 (임시)
function toggleSpclPrmtn_address() {
  console.log("특별 할인 토글 버튼 클릭됨");
} */

// ✅ 카카오 지도 초기화
function initMap() {
  var container = document.getElementById("store_search_map");
  var options = {
    center: new kakao.maps.LatLng(37.5665, 127.0003),
    level: 5,
  };

  var map = new kakao.maps.Map(container, options);

  // ✅ 도미노 매장 목록 (위도, 경도, 매장명)
  var storeLocations = [
    {
      name: "명동점",
      lat: 37.5642135,
      lng: 126.9891455
    },
    {
      name: "신당점",
      lat: 37.565804,
      lng: 127.015598
    }
  ];

  // ✅ 마커 이미지 설정
  var imageSrc = './images/domino-marker.png',
      imageSize = new kakao.maps.Size(40, 50),
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // ✅ 매장마다 마커 생성
  storeLocations.forEach(function(store) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(store.lat, store.lng),
      title: store.name,
      image: markerImage
    });

    // ✅ 마커 클릭 시 간단한 정보창 띄우기
    var infowindow = new kakao.maps.InfoWindow({
      content: `<div style="padding:6px 10px;font-size:13px;">${store.name}</div>`
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  });
};