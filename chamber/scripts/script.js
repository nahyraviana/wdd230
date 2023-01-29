const datefield = document.querySelector(".date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;



let year = document.querySelector("#year");
const currentYear =  new Date().getFullYear();
year.textContent= currentYear;



let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

