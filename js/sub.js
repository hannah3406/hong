//mouse wheel event
const imgZoom = document.querySelectorAll('.imgZoom');
const zoomSpeed = 0.01;
let zoom = 0.01;

imgZoom.forEach(function(v,k){
    document.addEventListener("wheel", function(e){
        console.log(e);
        if(e.deltaY > 0){
            imgZoom[k].style.transform = `scale(${zoom += zoomSpeed})`;
        }else{
            imgZoom[k].style.transform = `scale(${zoom -= zoomSpeed})`;
        }
    });
})
