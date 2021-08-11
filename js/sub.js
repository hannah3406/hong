//mouse wheel event
//스크롤 내리면 section하나씩 등장/퇴장
window.addEventListener('scroll',function(){
    const elM = document.querySelectorAll('.elM');
    let elHei = window.innerHeight;
    let num = 100;

    for(let i=0;i<elM.length;i++){
        if(elHei <= window.scrollY* num){
            elM[i].classList.add('active');
        }else{
            elM[i].classList.remove('active');
        }
        num ++;
}

})
//이미지 사이즈 크기 확대/축소
const imgZoom = document.querySelectorAll('.imgZoom');
const zoomSpeed = 0.001;
let zoom = 0.01;

imgZoom.forEach(function(v,k){
    document.addEventListener("wheel", function(e){
        console.log(e);
        if(e.deltaY > 0){
            zoom += zoomSpeed;
        }else{
            zoom -= zoomSpeed;
        }
        imgZoom[k].style.transform = `scale(${zoom})`;
    });
})

