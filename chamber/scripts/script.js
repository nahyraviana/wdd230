/*jshint esversion: 7 */

/*Date display*/

const datefield = document.querySelector(".date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

let year = document.querySelector("#year");
const currentYear =  new Date().getFullYear();
year.textContent= currentYear;

/*Footer Last modified*/

let lastModif = new Date(document.lastModified);
document.getElementById("modified").innerHTML = lastModif;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

/*Directory JSON Data*/

async function getBusinessesData() {
    const response = await fetch("https://nahyraviana.github.io/wdd230/chamber/scripts/data.json");
    const data = await response.json();
    displaySpotlights(data.businesses);
}

async function displaySpotlights(businesses) {
    const spotlight1 = document.querySelector("#s1");
    const spotlight2 = document.querySelector("#s2");
    const spotlight3 = document.querySelector("#s3");
    let adMembers = [];

    businesses.forEach((business) => {
        if (business.membership_level == "Gold" || business.membership_level == "Silver")
        {
            adMembers.push(business);
        }
    })
    
    shuffleArray(adMembers);
    //Spotlight 1
    let chosenSpotlight = adMembers.pop();
    let logo = document.createElement("img");
    let siteLink = document.createElement("a");
    let number = document.createElement("p");

    number.textContent = chosenSpotlight.phone_number;
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight.website)

    logo.setAttribute("src", chosenSpotlight.image);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight1.appendChild(image);
    spotlight1.appendChild(website);
    spotlight1.appendChild(phone_number);

    //Spotlight 2
    let chosenSpotlight2 = adMembers.pop();
    logo = document.createElement("img");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight2.phone_number;
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight2.website)

    logo.setAttribute("src", chosenSpotlight2.image);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight2.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight2.appendChild(image);
    spotlight2.appendChild(website);
    spotlight2.appendChild(phone_number);

    //Spotlight 3
    let chosenSpotlight3 = adMembers.pop();
    logo = document.createElement("img");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight3.phone_number;
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight3.website)

    logo.setAttribute("src", chosenSpotlight3.image);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight3.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("height", "200");
    logo.setAttribute("class", "businessLogo");

    spotlight3.appendChild(image);
    spotlight3.appendChild(website);
    spotlight3.appendChild(phone_number);
}

getBusinessesData();

//Durnstenfeld shuffle method
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}