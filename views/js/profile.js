var editablepars = []

function edit(){
    var par = document.getElementsByClassName('changeable')
    var arr = Array.prototype.slice.call(par)
    arr.forEach(function(element) {
       element.setAttribute('contentEditable', 'true' ) 
       element.setAttribute('style', 'border: solid grey')
    })
}
