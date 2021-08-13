const elM = document.querySelectorAll('.elM');
let obj=[], pos={y:0,y2:0,state:true};
//objani 함수
function objani(el){
    this.imgZoom = el.querySelectorAll('.imgZoom');
    this.zoomSpeed = 0.001;
    this.zoom = 0.5;
    this.rotateImg = 3.5;
    this.rotateImgSpeed = 0.2;

    this.update = function(){   
        try{
            if(pos.state){
                this.zoom += this.zoomSpeed;
                this.rotateImg += this.rotateImgSpeed;
            }else{
                this.zoom -= this.zoomSpeed;
                this.rotateImg -= this.rotateImgSpeed;
            }
            for(let i=0;i<this.imgZoom.length;i++){
                this.imgZoom[i].style.transform = `scale(${this.zoom}) rotate(${this.rotateImg}deg)`;
            }
        }catch{}
    }        
}
//objani 함수선언(3번반복문)
for(let i=0;i<elM.length;i++){
    obj.push(new objani(elM[i]) )   
}
//스크롤 아래로 내리면 false, 위로 올리면 true
function scrollState(){
    pos.y = window.scrollY;
    (pos.y > pos.y2) ? pos.state=true : pos.state=false; 
    pos.y2 = pos.y;
}
//스크롤 이벤트
window.addEventListener('scroll',function(){ 
    scrollState();   
    let num = 0;     

    for(let i=0; i<elM.length; i++){
        let elHei = elM[i].offsetTop - 80;

        if(elHei <= window.scrollY){
            elM[num].classList.remove('active');
            elM[i].classList.add('active');
            obj[i].update();
        }else{
            elM[i].classList.remove('active');
        }  
        num = i;
    }
})



//사진 회전하면서 옆으로 움직이기
    const Photo = document.querySelectorAll('.s-3-photo img');
    const PhotoBox = document.querySelector('.s-3-photo');

    document.addEventListener("wheel", function(e){
        if(e.deltaY > 0){
            PhotoBox.style.transform +=`translateX(-10px)`;
        }else{
            PhotoBox.style.transform +=`translateX(10px)`;
        }
    });

    Photo.forEach(function(v,k){
        document.addEventListener("wheel", function(e){
            if(e.deltaY > 0){
                Photo[k].style.animation += `rotateS3 2s infinite`;
                // Photo[2*k].style.transform +=`rotate(-3deg)`;
            }else{
                // Photo[k].style.transform +=`rotate(-3deg)`;
                Photo[k].style.animation += `rotateS4 2s infinite`;
            }
        });
    })

