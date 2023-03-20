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


const directoryUrl = "https://nahyraviana.github.io/wdd230/chamber/scripts/data.json";

const showSpotLight = (directories) => {
  
  const spotlights = document.querySelector("#spotlights");

  directories.forEach((directory, index) => {
    let sectionCard = document.createElement("div");
    const spot = index + 1;
    if (spot % 2 === 0) {
      sectionCard.classList.add(
        "section",
        "card",
        `spot-${spot}`,
        "olive",
        "text-white"
      );
    } else {
      sectionCard.classList.add("section", "card", `spot-${spot}`);
    }

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let heading = document.createElement("h2");
    heading.textContent = directory.name;
    cardHeader.append(heading);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");

    let bodyImg = document.createElement("img");
    bodyImg.setAttribute("src", directory.logo);
    bodyImg.setAttribute("height", 50);
    bodyImg.setAttribute("width", 50);

    let bodyText = document.createElement("p");
    bodyText.textContent = directory.companyMoto;

    cardBody.append(bodyImg);
    cardBody.append(bodyText);

    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer', 'text-center');
    
    let websiteLink = document.createElement('a');
    websiteLink.classList.add('link');
    websiteLink.setAttribute('href', directory.websiteUrl);
    websiteLink.innerText = 'website';

    cardFooter.innerHTML = `${directory.phoneNumber} | `
    cardFooter.append(websiteLink);

    sectionCard.append(cardHeader);
    sectionCard.append(cardBody);
    sectionCard.append(cardFooter);

    spotlights.append(sectionCard);
  });
};


const getDirectories = async () => {
  const response = await fetch(directoryUrl);
  const data = await response.json();
  const spotlight = data.directories
  .filter(directory =>directory.membershipLevel === "Gold"|| directory.membershipLevel === "Silver")
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .slice(0, 3);

  showSpotLight(spotlight);
}

getDirectories();
