const jsonData = async function getFruitsData() {
    const response = await fetch("https://nahyraviana.github.io/wdd230/final-project/scripts/fruit-data.json");
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


