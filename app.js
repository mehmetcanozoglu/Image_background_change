let ImageBox = document.querySelector(".img-box")
let ImageWrap = document.querySelector(".img-wrap")
let originalImg = document.getElementById("originalImg")
let line = document.getElementById("line")

originalImg.style.width = ImageBox.offsetWidth + "px"

leftSpace = ImageBox.offsetLeft;

ImageBox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px";
    ImageWrap.style.width = boxWidth
    line.style.left = boxWidth;
}