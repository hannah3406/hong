//움직이기
// $(function() {
// 	$( "#PopupLayer" ).draggable();
// });

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
const btnPlay = document.querySelectorAll('.vod_cover img');
const elPlayIcon = document.querySelectorAll('.vod_icon');
const btnPlay1 = document.querySelectorAll('.btn_play');

let idx5 = 0;

elPlayIcon.forEach(function(v,k){
    elPlayIcon[k].addEventListener('click',function(){
        elPlayIcon[idx5].classList.remove('active');
        btnPlay[idx5].classList.remove('active');
        btnPlay1[idx5].classList.remove('active');

        elPlayIcon[k].classList.add('active');
        btnPlay[k].classList.add('active');
        btnPlay1[k].classList.add('active');
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
    },100);
})

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


//PopUp
//창 닫기(checked되어있으면 그만큼 노출x)
if(document.cookie.match('mainPopup')){
    PopupLayer.style.display='none';
}
PopupClose.addEventListener('click',function(){
    if(check.checked){
        let date = new Date();
        date.setMinutes(date.getMinutes() + 5);
        document.cookie = `lypopup=mainPopup;Expires=${date.toUTCString()}`;
    }
    PopupLayer.style.display='none';
})


//section5 youtube api
const vodPlayer = document.querySelector('.vod_player');
let vodUrl = ['S82wJ0DGFGI','VTTkU4SReM8'];
let objVod = [];

    // var elDiv = document.createElement('div');
    // elDiv.setAttribute('id','Player'+i)
    // vodPlayer.append(elDiv);
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    var player;
    function onYouTubeIframeAPIReady() {
        for(let i=0;i<vodUrl.length;i++){
            player = new YT.Player('Player'+i, {
                height: '566',
                width: '768',
                videoId: vodUrl[i],
                events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
                }
            });
            objVod.push(player);
        }
    }
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
    event.target.pauseVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            // setTimeout(stopVideo, 6000);
            done = true;
        }

    }
    function stopVideo() {
        player.stopVideo();
    }


let idxVdo = 0;
const vodPlayer1 = document.querySelectorAll('.Vodplayer');

for(let i=0; i<btnPlay1.length;i++){
    btnPlay1[i].addEventListener('click',function(){
        vodPlayer1[idxVdo].classList.remove('active');
        objVod[idxVdo].stopVideo();

        objVod[i].playVideo();
        vodPlayer1[i].classList.add('active'); //유튜브
        btnPlay[i].classList.remove('active'); //커버
        btnPlay1[i].classList.remove('active'); //버튼

        idxVdo = i;
    });
}