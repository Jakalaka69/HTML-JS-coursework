function toggleNav(){
    let links = document.querySelector(".chp");
    links.classList.toggle("chpshow");
}
let dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("click",toggleNav);




function indexImage(){
    let intro2 = document.getElementsByClassName("intro")
    intro2.innerHTML = '<img id="image2" src="chapter3.jpg"/>'
    
}
indexImage()