# ProjectDomino
Domino Pizza Clone 🍕

> **실제 도미노피자 웹사이트의 UI/UX를 학습용으로 재현한 클론 프로젝트**  
> HTML/CSS/JavaScript를 활용해 반응형 레이아웃, 메뉴 탐색, 장바구니, 주문 흐름 등을 구현했습니다.  
> **학습 & 포트폴리오** 목적으로 제작되었으며, 상업적 용도로 사용하지 않습니다.

---

### 🍕 Domino Clone (KR) — HTML/CSS/JS

008_Project_domino · 도미노피자 코리아 웹사이트를 토대로 만든 학습용 클론 프로젝트입니다.<br>
반응형 헤더/네비, 배너 슬라이더, 매장검색(카카오 지도), 이벤트/제휴/쿠폰 등 실사용 흐름을 따라가며 UI/UX와 퍼블리싱 역량을 훈련했습니다.<br>
⚠️ 이 프로젝트는 교육 목적의 포트폴리오이며 도미노피자와 어떠한 제휴/관계도 없습니다. 로고·이미지는 학습 용도로만 사용했습니다.

---

### ✨ 주요 기능

헤더/GNB: 스크롤 고정(Sticky), 1/2뎁스 메뉴, ‘더보기’ 토글 드롭다운

메인 배너 슬라이더: jQuery bxSlider 기반 자동 재생·페이저·양옆 컨트롤

카드형 프로모션 섹션: 로그인 유도 카드, 혜택 배너

하단 배너 롤링: 서브 프로모션 이미지 캐러셀

메뉴 페이지: 탭형 카테고리 · 카드 리스트

매장찾기: 카카오 지도 SDK + 매장 마커, 스위치형 할인 필터(텍스트 ON/OFF)

이벤트/제휴/쿠폰/기프트: 실제 플로우를 모사한 정적 페이지 구성

공통 컴포넌트: header.html, footer.html 샘플 및 전역 스타일/스크립트

---

### 🗂️ 페이지 구성

404.html — 404 페이지

costomer_compliment.html — 고객센터(문의/칭찬)

ecoupon_instruction.html — E-쿠폰 이용안내

ecoupon_order.html — E-쿠폰 주문

eventAff_Affiliation.html — 제휴/할인

eventAff_Affilliation_hcard.html — 제휴/혜택 상세(H-Card)

eventAff_event.html — 이벤트

footer.html — 공통 푸터(샘플)

franchise.html — 가맹/창업

gift.html — e-기프트

header.html — 공통 헤더(샘플)

index.html — 메인

login.html — 로그인

menu.html — 메뉴

notification_news.html — 공지/뉴스

sign_up.html — 회원가입

store_search.html — 매장찾기

각 페이지는 /css, /js, /images 자원을 공유합니다.

---

## 🛠 기술 스택
| 구분        | 사용 기술 |
|-------------|-----------|
| **Frontend** | <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> |
| **UI 라이브러리** | <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> |
| **빌드/배포** | <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> |

---

## 📂 프로젝트 구조
<img width="326" height="666" alt="image" src="https://github.com/user-attachments/assets/0047c73c-09c8-4039-bdc5-1c0d15594309" />

---

## 🚀 실행 방법

### 1) 로컬에서 실행
프로젝트 클론
git clone https://github.com/Shuu620/ProjectDomino.git

폴더 이동
cd ProjectDomino

index.html 브라우저에서 열기

### 2) VSCode Live Server 사용
VSCode에서 프로젝트 폴더 열기

Live Server 확장 프로그램 설치

index.html 파일에서 Open with Live Server

### 3) 데모 페이지
배포 링크: https://Shuu620.github.io/ProjectDomino/

### 📸 스크린샷
Main
![main](https://github.com/user-attachments/assets/3f76c541-4ec1-400e-8597-55674b14b948)
Menu
![menu](https://github.com/user-attachments/assets/de7b4d9f-d72b-47f1-9890-a413b825c367)
Event
![event](https://github.com/user-attachments/assets/3b103601-da31-4229-9565-b2c97b0b16d1)
매장검색
![store_search](https://github.com/user-attachments/assets/9b556706-6dfe-4092-ae86-17b71efe9e59)
회사소개
![introduce_company](https://github.com/user-attachments/assets/5a477077-ebe6-4c21-85e4-6a9606537d64)

### 📚 학습 포인트
전자상거래 UI 패턴 이해

상태 관리(장바구니)와 로컬스토리지 활용

반응형 웹 레이아웃 설계

HTML/CSS/JS 모듈화 및 유지보수성 향상

외부 라이브러리(jQuery, Swiper) 적용 방법

### ⚠️ 면책
본 프로젝트는 상업적 목적이 아닌 학습 및 포트폴리오 용도로 제작되었습니다.

도미노(Domino’s Pizza)의 상표·로고·이미지는 해당 소유자의 자산입니다.

### 📌 라이센스
MIT License © 2025
