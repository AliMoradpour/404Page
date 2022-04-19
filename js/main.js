const containter = document.querySelector('#container')

window.onmousemove = function(e){
    let x = e.clientX/5;
    let y = e.clientY/5;
    containter.style.backgroundPositionX = x + "px";
    containter.style.backgroundPositionY = y + "px";

}