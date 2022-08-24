var navbarButton = document.querySelector("#navbar-button");
var cubuk1 = document.querySelector("#cubuk1");
var cubuk2 = document.querySelector("#cubuk2");
var cubuk3 = document.querySelector("#cubuk3");
var responsiveList = document.querySelector("#navbar-links-responsive");
navbarButton.addEventListener("click", run3);
function run3() {
   cubuk1.classList.toggle("degistir");
   cubuk2.classList.toggle("degistir");
   cubuk3.classList.toggle("degistir");
   responsiveList.classList.toggle("degistir");
    return false;
}


responsiveList.addEventListener("click",run4);
function run4(e){
    if(e.target.className=="aa"){
        run3();
    }
}
