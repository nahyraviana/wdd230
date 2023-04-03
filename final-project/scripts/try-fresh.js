const requestURL =
    "https://nahyraviana.github.io/wdd230/final-project/scripts/fruit - data.json";

const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const fruits = jsonObject["fruits"];
    fruits.forEach(displayFruitOption);
  });

function displayFruitOption(fruit) {
  // Create elements to add to the document
    let option = document.createElement("label");
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", "fruit");
    let fruitName = document.createElement("p");
    radio.append(fruitName);
    fruitName.textContent = (fruit.name);

  // Add/append the label(card) with the input element
    option.appendChild(radio);

  // Add/append the existing HTML label with the cards class with the section(card)
    document.querySelector(".fruit-option").appendChild(option);
}

