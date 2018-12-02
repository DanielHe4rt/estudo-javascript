
document.addEventListener('click',function(evt){
    if(evt.target.className != "box"){
        return false;
    }
    let panels = document.querySelectorAll('.box')

    panels.forEach(panel => {
        panel.children[0].className = 'hidden-content'
    })
    console.log(evt)
    evt.target.children[0].className = "content"
})