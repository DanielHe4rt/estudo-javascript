let ctx = document.getElementById('ctx').getContext('2d')
let baseRadius = 12, incRadius = 1, mouseX = 0,mouseY = 0,interval, status;

document.addEventListener('mousedown',() => {
    status = true
    clearInterval(interval)
    interval = setInterval(()=>{incRadius++},100)
})
document.addEventListener('mouseup',() => {
    status = false
    clearInterval(interval)
    interval = setInterval(()=>{incRadius > 1 ? incRadius-- : false},100)
})
document.addEventListener('mousemove',evt => {
    if(status){
        ctx.beginPath()
        ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
        ctx.arc(evt.clientX,evt.clientY,baseRadius + incRadius,2 * Math.PI,false)
        ctx.fill();
    }
    
})





