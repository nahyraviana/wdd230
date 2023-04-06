const url =
    "https://nahyraviana.github.io/wdd230/final-project/scripts/fruit-data.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const fruits1 = jsonObject["fruits"];
    fruits1.forEach(calculateNutrition);
  });

const firstNameInput = document.getElementById("first-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const fruitSelect = document.querySelector(".fruit-option").querySelectorAll('[type="checkbox"]');
const specialInstructionsInput = document.getElementById("instructions");
const submitButton = document.querySelector(".mySubmit");
const orderDate = document.createElement("p");
orderDate.setAttribute("id", "order-date");
const nutritionFacts = document.createElement("p");
nutritionFacts.setAttribute("id", "nutrition-facts");



submitButton.addEventListener("click", (e) =>
{
  e.preventDefault();
  const firstName = firstNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const selectedFruits = getSelectedFruits();
  const specialInstructions = specialInstructionsInput.value;
  const formattedDate = new Date().toDateString();
  const nutritionInfo = calculateNutrition(selectedFruits);
  orderDate.textContent = formattedDate;
  nutritionFacts.textContent = nutritionInfo;

    output.appendChild(firstName);
    output.appendChild(email);
    output.appendChild(phone);
    output.appendChild(specialInstructions);
    output.appendChild(nutritionFacts);
    output.appendChild(orderDate);
  console.log(output);
});

function getSelectedFruits() {
  const selectedFruits = [];
  const options = fruitSelect.options;
  for (let i = 0; i < options.length; i++) {
    const optionInput = options[i];
    if (optionInput.checked) {
      selectedFruits.push(optionInput.value);
    }
  }
  return selectedFruits;
}

function calculateNutrition(selectedFruits){
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  selectedFruits.forEach((fruit) =>{
    totalCarbs += fruit.carbs;
    totalProtein += fruit.protein;
    totalFat += fruit.fat;
    totalSugar += fruit.sugar;
    totalCalories += fruit.calories;
  });

  return selectedFruits
}