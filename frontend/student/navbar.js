let target = document.getElementById("verticalnavbar");
let bars = document.querySelector(".fa.fa-bars")
let times = document.querySelector(".fa.fa-times")
const original_color = document.body.style.backgroundColor;
function showMenu(){
    target.style.left = "0%";
    times.style.visibility = "visible";
    bars.style.visibility = "hidden";
    let temp = target.style['backgroundColor'];
    document.body.style['backgroundColor'] = "grey";
    target.style.opacity = temp;
}
function hideMenu(){
    target.style.left = "-50%";
    times.style.visibility = "hidden";
    bars.style.visibility = "visible";
    document.body.style['backgroundColor'] = original_color;
}
bars.addEventListener("click",showMenu);
times.addEventListener("click",hideMenu);