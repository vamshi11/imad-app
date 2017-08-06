console.log('Loaded!');

var element = document.getElemenById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById("madi");
img.onclick = function(){
    img.style.moveleft='100px';
}