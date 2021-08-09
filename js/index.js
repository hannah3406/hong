// section1 pagenation기능
const elPage = document.querySelectorAll('.elPage');
const btnPage = document.querySelectorAll('.m-1-pagination-bullet');
let idx = 0;
console.log(elPage);
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
                  breakpoint: 1600,
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
            $(".center").height( $(".item-content").height(360) )
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


