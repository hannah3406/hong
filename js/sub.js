//mouse wheel event
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
