//mouse wheel event
//스크롤 내리면 section하나씩 등장/퇴장
window.addEventListener('scroll',function(){
    const elM = document.querySelectorAll('.elM');

    for(let i=0; i<elM.length; i++){
        let elHei = elM[i].offsetTop;
        let winHei = window.innerHeight;
    
        if(elHei-winHei <= window.scrollY){
            elM[i].classList.add('active');
        }else{
            elM[i].classList.remove('active');
        }  
        elHei = elM[i].offsetHeight;
    }
})
//이미지 사이즈 크기 확대/축소
const imgZoom = document.querySelectorAll('.imgZoom');
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

