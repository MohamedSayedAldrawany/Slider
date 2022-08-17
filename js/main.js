// var imags = Array.from(document.querySelectorAll(".item img"))
// var outerBox = document.getElementById("outerBox")
// var innerBox = document.getElementById("innerBox")
// var close = document.getElementById("close")
// var next = document.getElementById("next")
// var prev = document.getElementById("prev")
// var currenIndex = 0;
// for (var i = 0; i < imags.length; i++) {
//     imags[i].addEventListener("click", function (event) {

//         outerBox.style.display = "flex"
// var imgSrc = event.target.ge("src")
//         innerBox.style.backgroundImage = `url(${imgSrc})`;
//         currenIndex = imags.indexOf(event.target)
//     })
// }

// next.addEventListener("click",nextElement)
// function nextElement() {
//     currenIndex++;
//     if (currenIndex == imags.length) {
//         currenIndex = 0;
//     }
//     console.log(currenIndex);
//     var imgSrc = imags[currenIndex].getAttribute("src")
//     innerBox.style.backgroundImage = `url(${imgSrc})`

// }

// prev.addEventListener("click", preElement)
// function preElement() {
//     currenIndex--;
//     if (currenIndex < 0) {

//         currenIndex = imags.length - 1


//     }
// var imgSrc=imags[currenIndex].getAttribute("src")
//     innerBox.style.backgroundImage=`url(${imgSrc})`

// }

// close.addEventListener("click",closeElement)
// function closeElement(){
//     outerBox.style.display="none"
// }





// var img=Array.from(document.querySelectorAll(".item img"))
// var element=document.querySelector(".lightBoxContainer")
// var innerBox=document.querySelectorAll(".lightBoxitem")

// for(var i=0;i<img.length;i++){
//     img[i].addEventListener("click",function(e){
//         var imgSrc = e.target.getAtrribute("src")
//         element.classList.replace("d-none","d-flex")
//         innerBox.style.backgrounImage=`url(${imgSrc})`



//     })
// }
// console.log(img);


var imags = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBoxitem = document.querySelector(".lightBoxitem")
var currentInedx = 0;
var nextBtn = document.getElementById("next")
var prevBtn = document.getElementById("prev")
var closeBtn = document.getElementById("close")
for (var i = 0; i < imags.length; i++) {
    imags[i].addEventListener("click", function (event) {
        var imgSrc = event.target.getAttribute("src");



        lightBoxContainer.classList.replace("d-none", "d-flex")
        lightBoxitem.style.backgroundImage = `url(${imgSrc})`
        currentInedx = imags.indexOf(event.target)
        console.log(currentInedx);
    })
}
function next() {
    currentInedx++;
    if (currentInedx > imags.length) {
        currentInedx = 0;
    }
    var imagSrc = imags[currentInedx].getAttribute("src")
    lightBoxitem.style.backgroundImage = `url(${imagSrc})`

}
function prev() {
    currentInedx--;
    if (currentInedx < 0) {
        currentInedx = imags.length - 1;
    }
    var imagSrc = imags[currentInedx].getAttribute("src")
    lightBoxitem.style.backgroundImage = `url(${imagSrc})`

}

function close() {
    lightBoxContainer.classList.replace("d-flex", "d-none")
}
nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", prev)
closeBtn.addEventListener("click", close)

document.addEventListener("keyup", function (event) {
    if (event.key == "ArrowRight") {
        next()
        console.log(event);
    }
    else if (event.key == "ArrowLeft") {
        prev()
    }
    else if(event.key=="Backspace"){
        close()
    }


})

lightBoxContainer.addEventListener("click",function(e){
    console.log(e.target.getAttribute("id"));
    if(e.target.getAttribute("id")=="lightBoxContainer"){
        close()

    }
})