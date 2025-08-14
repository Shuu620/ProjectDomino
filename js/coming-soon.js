function showComingSoonMessage() {
    // 이미 존재하는 경우 재생성 방지
    if (!document.getElementById('coming-soon-message')) {
        const msg = document.createElement('div');
        msg.id = 'coming-soon-message';
        msg.innerText = '죄송합니다. 해당 페이지는 준비중입니다.';

        // 스타일 변경 (중앙 팝업)
        msg.style.cssText = `
            font-family: 'Noto Sans KR', sans-serif;
            background-color: white;
            color: rgb(3, 57, 137);
            padding: 25px 40px;
            font-size: 18px;
            font-weight: bold;
            border: 2px solid rgb(3, 57, 137);
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
            text-align: center;
            background: #fff;
        `;

        document.body.appendChild(msg);

        // 3초 후 자동 제거
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
}