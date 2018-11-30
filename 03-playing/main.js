let imgBox = document.getElementById('image-box')
imgBox.style.backgroundColor = document.getElementById('color').value
imgBox.style.filter = `blur(${(document.getElementById('blur').max / 2)}px)`
imgBox.style.padding = `${(document.getElementById('padding').max / 2)}px`

document.getElementById('blur').addEventListener('mousemove',function(){
    imgBox.style.filter = `blur(${this.value}px)`
})

document.getElementById('padding').addEventListener('mousemove',function(){
    imgBox.style.padding = `${this.value}px`
})

document.getElementById('color').addEventListener('change',function(){
    imgBox.style.backgroundColor = this.value
})