// 수량 조절 버튼
$(document).ready(function () {
    $('.plus_btn').click(function () {
    const countBox = $(this).siblings('.count');
    let count = parseInt(countBox.text());
    count++;
    countBox.text(count);
    });

    $('.minus_btn').click(function () {
    const countBox = $(this).siblings('.count');
    let count = parseInt(countBox.text());
    if (count > 1) {
        count--;
        countBox.text(count);
    }
    });
});