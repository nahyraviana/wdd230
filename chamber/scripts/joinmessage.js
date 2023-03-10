/*Special Monday & Tuesday Message display*/
let day = now.getDay();
let joinMessage = document.getElementById("join-us");

if (day === 1 || day === 2 ) {
  joinMessage.style.display = "block";
}

else{
  joinMessage.style.display = "none";
}


