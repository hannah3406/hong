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
        
        if(window.matchMedia("(min-width: 1400px)").matches){
            $(".center").height( $(".item-content").height(400) )
        } else{
            $(".center").height( $(".item-content").height(350) )
        }



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

}


