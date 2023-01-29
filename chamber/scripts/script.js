const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



let year = document.querySelector("#year");
const currentYear =  new Date().getFullYear();
year.textContent= currentYear;



let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

