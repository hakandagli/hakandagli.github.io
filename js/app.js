let mapButton=document.getElementById("mapButton");
let googleMap=document.getElementById("googleMap");
mapButton.addEventListener("click",mapFunction);
function mapFunction(e){
    googleMap.classList.toggle("degistir");

    
    if(mapButton.innerHTML=="Haritayı Kapat"){
        mapButton.innerHTML="Haritayı Etkinleştir";
        
    }else{
        mapButton.innerHTML="Haritayı Kapat";   
         
    }
}


