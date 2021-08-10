// section1 pagenation기능
const elPage = document.querySelectorAll('.elPage');
const btnPage = document.querySelectorAll('.m-1-pagination-bullet');
let idx = 0;
for(let i=0;i<btnPage.length;i++){
    btnPage[i].addEventListener('click',function(){
        btnPage[idx].classList.remove('active');
        elPage[idx].classList.remove('on');

        btnPage[i].classList.add('active');
        elPage[i].classList.add('on');

        idx = i;
    })
}

//json 파일 연결하기
fetch('js/prdList.json')
    .then( (res) => res.json() )
    .then( (data) => callback(data) );

    function callback(data){
        //section2의 Tab 부분
        //prd-list 선택자 잡아주기
        const Slider = document.querySelectorAll('.center');
        let msg = ['','','',''],srcFront,srcBack,tit,detail;

        for(let i=0;i<Slider.length;i++){

            data.items[i].good.forEach(function(v,k){
                srcFront = data.items[i].good[k].srcFront
                srcBack = data.items[i].good[k].srcBack
                tit = data.items[i].good[k].tit
                detail = data.items[i].good[k].detail

                msg[i] += `                    
                <div class="item-content">
                    <figure class=photo>
                        <img src="${srcFront}" alt="m-2">
                        <img src="${srcBack}" alt="m-2">
                    </figure>
                    <div class="item-content-text">
                        <strong>${tit}</strong>
                        <span>${detail}</span>
                    </div>
                </div>
                `
            });

            //Slider[i].innerHTML = msg;
            Slider[i].innerHTML = msg[i];
        }


    //slick
        //m-2
        $(".center").slick({
            dots: false,
            infinite: true,
            centerMode: false,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1800,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
        
        if(window.matchMedia("(min-width: 1600px)").matches){
            $(".center").height( $(".item-content").height(400) )
        } else{
            $(".center").height( $(".item-content").height(330) )
        }


    //section2 의 Tab기능
    const btnLi = document.querySelectorAll('.prd-tab li'); //클릭할 것
    const elPrdList = document.querySelectorAll('.prd-list'); //보여줄 것
    let num = 0; //선택한 index No와 일치시키기 위한 변수 생성

    for(let i=0;i<btnLi.length;i++){
        btnLi[i].addEventListener('click',function(){
            btnLi[num].classList.remove('on');
            elPrdList[num].classList.remove('on');
            btnLi[i].classList.add('on');
            elPrdList[i].classList.add('on');
            num = i;

        })
    }

        //section3 부분
        //prd-list 선택자 잡아주기
        const Slider3 = document.querySelector('.m-3-center');
        let msg3 = '',src,m3tit;
        

            data.main3.forEach(function(v,k){
                src = data.main3[k].src
                m3tit = data.main3[k].m3tit

                msg3 += `                    
                <div class="item-content">
                    <figure class="photo">
                        <img src="${src}" alt="m-3" class="photo_img">
                        <figcaption class="photo_cont">
                            <p class="photo_tit">${m3tit}</p>
                            <p class="photo_stit"></p>
                            <img src="img/arrow_cont.png" alt="m-3">
                        </figcaption>
                    </figure>
                </div>
                `
            });
            Slider3.innerHTML = msg3;

                //m-3
                $(".m-3-center").slick({
                    dots: false,
                    infinite: true,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                });



        //section6 부분
        //선택자 잡아주기
        const Slider6 = document.querySelector('.m-6-center');
        let msg6 = '';

        data.main6.forEach(function(v,k){
            main6 = data.main6[k]

            msg6 += `                    
            <div class="item-content">
            <figure class= "m-6-photo">
                <img src="${main6}" alt="m-6" class="m-6-photo_img">
                <figcaption><p class="insta_over"><a>@hungruichenkorea</a><p></figcaption>
            </figure>
        </div>
            `
        });  
        
        Slider6.innerHTML = msg6;
        //m-6
        $(".m-6-center").slick({
            dots: false,
            infinite: true,
            centerMode: false,
            slidesToShow: 4,
            slidesToScroll: 1
        });

}

//section5 vod tab기능
const btnPlay = document.querySelectorAll('.vod_cover');
const elPlayIcon = document.querySelectorAll('.vod_icon');

let idx5 = 0;

elPlayIcon.forEach(function(v,k){
    elPlayIcon[k].addEventListener('click',function(){
        elPlayIcon[idx5].classList.remove('active');
        btnPlay[idx5].classList.remove('active');

        elPlayIcon[k].classList.add('active');
        btnPlay[k].classList.add('active');
        idx5 = k;
    })
});

//wheel event
let delta,num=0,move,len=$('.con').length;
$(window).on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -60;  
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta<0){
            //down
            if(num<len)num++;
        }else{
            if(num>0)num--;
        }

        console.log(num);
        $('html,body').stop().animate({
            scrollTop : $(window).height() * num
        },{queue:false})
    },50);
   
})

//scroll event
//section5 스크롤 내리면 opacity
window.addEventListener('scroll',function(){
    const elM = document.querySelector('.elM');

    let elHei = elM.offsetTop;
    let winHei = window.innerHeight;

    if(elHei-winHei <= window.scrollY){
        titBox.classList.add('active');
    }else{
        titBox.classList.remove('active');
    }

})



