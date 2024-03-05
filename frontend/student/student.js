let target = document.getElementById("verticalnavbar");
let bars = document.querySelector(".fa.fa-bars")
let times = document.querySelector(".fa.fa-times")
function showMenu(){
    target.style.left = "0%";
    times.style.visibility = "visible";
    bars.style.visibility = "hidden";
}
function hideMenu(){
    target.style.left = "-50%";
    times.style.visibility = "hidden";
    bars.style.visibility = "visible";
}
console.log(120);
bars.addEventListener("click",showMenu);
times.addEventListener("click",hideMenu);