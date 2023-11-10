function press(e){
    document.getElementById('inp').value += e
}
function equal(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
function ac(){
    document.getElementById('inp').value = ('')
    
}
var b = document.getElementById('inp')
function del(){

    b.value = b.value.toString().slice(0, -1)
}