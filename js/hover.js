/* 제이쿼리 = 마우스 엔터, 마우스 리브 */
$('.md_pick_area li a').mouseenter(function(){
    $(this).children('.md_up').stop().fadeIn(200);
});
$('.md_pick_area li a').mouseleave(function(){
    $(this).children('.md_up').stop().fadeOut(200);
});