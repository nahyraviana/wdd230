/*Directory JSON Data*/

async function getCompaniesData() {
    const response = await fetch("https://nahyraviana.github.io/wdd230/chamber/scripts/data.json");
    const data = await response.json();
    displaySpotlights(data.companies);
}

async function displaySpotlights(companies) {
    const spotlight1 = document.querySelector(".s1");
    const spotlight2 = document.querySelector(".s2");
    const spotlight3 = document.querySelector(".s3");
    let adMembers = [];

    companies.forEach((company) => {
        if (company.membership_level == "Gold" || company.membership_level == "Silver")
        {
            adMembers.push(company);
        }
    })

    shuffleArray(adMembers);
    //Spotlight 1
    let chosenSpotlight = adMembers.pop();
    let logo = document.createElement("img");
    let website = document.createElement("a");
    let name = document.createElement("h2");
    let number = document.createElement("p");

    number.textContent = chosenSpotlight.phone_number;
    name.textContent = chosenSpotlight.name;

    website.textContent = "Visit Site";
    website.setAttribute("href", chosenSpotlight.website);

    logo.setAttribute("src", chosenSpotlight.image + ".webp");
    logo.setAttribute("alt", chosenSpotlight.name);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("class", "businessLogo");

    spotlight1.appendChild(logo);
    spotlight1.appendChild(name);
    spotlight1.appendChild(website);
    spotlight1.appendChild(number);

    //Spotlight 2
    let chosenSpotlight2 = adMembers.pop();
    logo = document.createElement("img");
    name = document.createElement("h2");
    website = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight2.phone_number;
    name.textContent = chosenSpotlight2.name;
    website.textContent = "Visit Site";
    website.setAttribute("href", chosenSpotlight2.website);

    logo.setAttribute("src", chosenSpotlight2.image + ".webp");
    logo.setAttribute("alt", chosenSpotlight2.name);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("class", "businessLogo");

    spotlight2.appendChild(logo);
    spotlight2.appendChild(name);
    spotlight2.appendChild(website);
    spotlight2.appendChild(number);

    //Spotlight 3
    let chosenSpotlight3 = adMembers.pop();
    logo = document.createElement("img");
    name = document.createElement("h2");
    website = document.createElement("a");
    number = document.createElement("p");

    name.textContent = chosenSpotlight3.name;
    number.textContent = chosenSpotlight3.phone_number;
    website.textContent = "Visit Site";
    website.setAttribute("href", chosenSpotlight3.website);

    logo.setAttribute("src", chosenSpotlight3.image + ".webp");
    logo.setAttribute("alt", chosenSpotlight3.name);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("class", "businessLogo");

    spotlight3.appendChild(logo);
    spotlight3.appendChild(name);
    spotlight3.appendChild(website);
    spotlight3.appendChild(number);
}

getCompaniesData();

//Durnstenfeld shuffle method
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}