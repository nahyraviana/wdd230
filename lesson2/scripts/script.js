let year = document.querySelector("#year");
const currentYear =  new Date().getFullYear();
year.textContent= currentYear;



let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

