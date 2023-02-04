const list = document.getElementById("list");
const input = document.getElementById("favchap");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    listItem.classList.add("list")
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () =>{
        list.removeChild(listItem);
    });
    input.focus();
});
