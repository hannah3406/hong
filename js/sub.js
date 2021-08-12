//mouse wheel event
//스크롤 내리면 section하나씩 등장/퇴장
window.addEventListener('scroll',function(){
    const elM = document.querySelectorAll('.elM');
    let num = 0; 

    for(let i=0; i<elM.length; i++){
        let elHei = elM[i].offsetTop - elM[i].offsetHeight;
        let winHei = window.innerHeight;

        if(elHei-winHei <= window.scrollY){
            elM[num].classList.remove('active');
            elM[i].classList.add('active');
        }else{
            elM[i].classList.remove('active');
        }  
        num = i;
    }
})
//이미지 사이즈 크기 확대/축소
for(let i=0;i<3;i++){
    const imgZoom = document.querySelectorAll('.imgZoom' + i);
    const zoomSpeed = 0.0005;
    let zoom = 0.5;

    imgZoom.forEach(function(v,k){
        document.addEventListener("wheel", function(e){
            if(e.deltaY > 0){
                zoom += zoomSpeed;
            }else{
                zoom -= zoomSpeed;
            }
            imgZoom[k].style.transform = `scale(${zoom})`;
        });
    })
}

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
            if(e.deltaY > 0 ){
                // Photo[k].style.animation = `rotateS3 1.5s infinite`
                Photo[k].style.transform = `rotate(2deg) translateY(-50%)`
            }else{
                // Photo[k].style.transform = `rotateS3 1.5s infinite`
                Photo[k].style.transform = `rotate(-2deg) translateY(-50%)`
            }
        });
    })

