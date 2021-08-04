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


//slick
if (window.matchMedia("(min-width: 1600px)").matches) {
    //m-2
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4.5,
        slidesToScroll: 1
    });
    //m-3
    $(".m-3-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    //m-6
    $(".m-6-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}else if(window.matchMedia("(min-width: 1400px)").matches) {    
    //m-2    
    $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1
    });
    //m-3
    $(".m-3-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow:4,
        slidesToScroll: 1
    });
    //m-6
    $(".m-6-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}else if(window.matchMedia("(min-width: 1200px)").matches){
    //m-2
    $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1
    });
    //m-3
    $(".m-3-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    //m-6
    $(".m-6-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}
else{
    //m-2
    $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1
    });
    //m-3
    $(".m-3-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    //m-6
    $(".m-6-center").slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}