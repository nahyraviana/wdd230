

let count = Number(window.localStorage.getItem("formCount"));
if(!count){
  count = 0;
}

let form = document.querySelector(".form");

form.addEventListener("submit", () => {
  count++;
    localStorage.setItem("formCount", count);
    window.location.href = "index.html";

    //let countDisplay = document.getElementById("drinks");
    //countDisplay.textContent = count;
});



