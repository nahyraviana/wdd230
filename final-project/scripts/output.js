

// get the form element
const myForm = document.querySelector(".form");

// add event listener to the form submit event
myForm.addEventListener("submit", () =>
{
  // prevent the form from submitting

  // extract the form data
  const formData = new FormData(myForm);
  const firstName = formData.get("first-name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const specialInstructions = formData.get("special-instructions");
  const selectedFruits =formData.getAll("name")

  // get the total nutritional information for the selected fruits
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  selectedFruits.forEach((fruit) =>
  {
    const fruitInfo = fruit.name;
    totalCarbs += fruitInfo.carbs;
    totalProtein += fruitInfo.protein;
    totalFat += fruitInfo.fat;
    totalSugar += fruitInfo.sugar;
    totalCalories += fruitInfo.calories;
  });

  // get the current date
  const currentDate = new Date();
  const orderDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  // create the order summary element and update its content
  const orderSummary = document.createElement("div");
  orderSummary.innerHTML = `
    <h2>Order Summary</h2>
    <p>First Name: ${firstName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Selected Fruits: ${selectedFruits.join(", ")}</p>
    <p>Special Instructions: ${specialInstructions}</p>
    <p>Order Date: ${orderDate}</p>
    <p>Total Carbs: ${totalCarbs}</p>
    <p>Total Protein: ${totalProtein}</p>
    <p>Total Fat: ${totalFat}</p>
    <p>Total Sugar: ${totalSugar}</p`;

  console.log(orderSummary)
});
