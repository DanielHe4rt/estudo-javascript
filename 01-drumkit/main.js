document.addEventListener('keydown',function(e){
    let button = document.querySelector(`button[data-key='${e.keyCode}']`)
    if(!button){
        console.log("botão errado, amigo.")
        return false;
    }
    button.classList.add('clicked')
    let action = button.querySelector('div').textContent.toLowerCase()
    console.log(`Botão: ${e.key} | Codigo: ${e.keyCode}`)
    let audio = new Audio(`sounds/${action}.wav`);
    audio.play();
})

document.addEventListener('keyup',function(e){
    let button = document.querySelector(`button[data-key='${e.keyCode}']`)
    if(!button){
        console.log("botão errado, amigo.")
        return false;
    }
    button.classList.remove('clicked');
})