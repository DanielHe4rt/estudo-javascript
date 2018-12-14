let clicked = true;
let firstId = null, lastId = null;

document.addEventListener('keydown',(evt) => clicked = (evt.keyCode === 16) ? true : false)
document.addEventListener('keyup',() => clicked = false)
document.addEventListener('click',(evt) => {
    if(clicked){
        if(evt.target.localName != 'input') { return false }
        if(firstId === null){
            firstId = evt.target.id
        }else{
            if(lastId === null){
                console.log(firstId,lastId)
                lastId = evt.target.id
                for(firstId;firstId <= lastId; firstId++){
                    document.getElementById(firstId).checked = true;
                }
                firstId = null
                lastId = null;
            }
        }
        console.log(firstId,lastId)
    }
})