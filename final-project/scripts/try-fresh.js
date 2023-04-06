const requestURL =
    "https://nahyraviana.github.io/wdd230/final-project/scripts/fruit-data.json";

const fruitDiv = document.querySelector(".fruit-option");

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
    let fruitName = fruit.name;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
  checkbox.value = fruitName;
  checkbox.name = fruitName;
    checkbox.setAttribute("class", "check");
    option.appendChild(checkbox);
    option.append(fruitName);
    fruitName.textContent = (fruit.name);

  // Add/append the label(card) with the input element
    //option.appendChild(radio);

  // Add/append the existing HTML label with the cards class with the section(card)
  //fruitDiv.appendChild(checkbox);

  fruitDiv.appendChild(option);

  function onlyCheckBox() {
	let checkbox = document.querySelector(".fruit-option").querySelectorAll('[type="checkbox"]');
	let limit = 3;
	for (let i = 0; i < checkbox.length; i++) {
		checkbox[i].onclick = function() {
			let checkedCount = 0;
				for (let i = 0; i < checkbox.length; i++) {
				checkedCount += (checkbox[i].checked) ? 1 : 0;
			}
			if (checkedCount > limit) {
				console.log("You can select maximum of " + limit + " fruit options.");
				alert("You can select maximum of " + limit + " fruit options.");
				this.checked = false;
			}
		}
	}
}

onlyCheckBox()


}


//const formData = document.querySelector(".form");
//formData.addEventListener("submit", (e) =>
//{
//  e.preventDefault();
//  let selectedFruit = [];
//  document.querySelectorAll('[type="checkbox"]').forEach(item =>
//  {
//    if (item.checked === true)
//    {
//      selectedFruit.push(item.textContent);
//    }
//
//  })
//  console.log(selectedFruit);
//})

