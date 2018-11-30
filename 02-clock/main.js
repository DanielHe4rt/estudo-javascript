
setInterval(function(){
    let time = new Date();
    let hourDeg =  ((360 / 12) * (time.getHours() / 2) ) + 90;
    let minuteDeg =  6 * time.getMinutes() + 90;
    let secondDeg =  6 * time.getSeconds() + 90;
    document.getElementById('hours').style.transform = `rotate(${hourDeg}deg)`
    document.getElementById('minutes').style.transform = `rotate(${minuteDeg}deg)`
    document.getElementById('seconds').style.transform = `rotate(${secondDeg}deg)`
    document.getElementById('time').innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
},1000)