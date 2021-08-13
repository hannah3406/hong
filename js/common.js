//inc.html
$(function(){
	$('header').load('inc.html .head-all',head);
	$('footer').load('inc.html .footer',);
});

function head(){
//menu_box slideUp/Down
//1)전체hide
$('.menu_box').hide();
$('.menu_box_content').hide();

$('.menu_list ul li').mouseenter(function(){
    var idx = $(this).index();

    if(idx > 1 && idx <5){
        //2) 3번째 메뉴부터 5번째 메뉴까지
        $('.menu_box').stop().slideDown(500);
        $('.menu_box_content').hide();
        $('.menu_box_content').eq(idx-1).show();
    }else if(idx == 0){
        //3) 1번째 메뉴
        $('.menu_box').stop().slideDown(500);
        $('.menu_box_content').hide();
        $('.menu_box_content').eq(idx).show();
    }else{
        //4) 그 외 메뉴 클릭시 slideUp
        $('.menu_box').slideUp();
    }
})
//slideUp
$('.menu_box').mouseleave(function(){
    $(this).stop().slideUp(500);
})


//ham_menu click event
const MenuTrigger = document.querySelector('.menu_trigger');
const HamMenu = document.querySelector('.ham_menu');
const HamClose = document.querySelector('.ham_close');

    MenuTrigger.addEventListener('click',function(){
        HamMenu.classList.add('active');
    });
    HamClose.addEventListener('click',function(){
        HamMenu.classList.remove('active');
    })

}
LoadingWithMask();
setTimeout("closeLoadingWithMask()", 2000);

//로딩중
function LoadingWithMask() {
    //마스크 표시
    $('#mask').show();  

    //로딩중 이미지 표시
    $('#loadingImg').show();
}

function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();  
}

