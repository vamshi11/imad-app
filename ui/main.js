console.log('Loaded!');


var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.matginLeft = marginLeft+'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100)
};
