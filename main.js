let button = document.getElementById("submitButton");
let deleteButton = document.getElementById("delete");
let newUser = document.getElementById("newUser");

let users = ["Hejpa", "Dejpa"];
users.push(localStorage.getItem("names"));

button.addEventListener("click", function input() {
  let inputValue = document.getElementById("inputName").value;

  if (users.includes(inputValue)) {
    newUser.innerHTML = "Välkommen tillbaka" + " " + inputValue;
    console.log("if block");
  } else {
    newUser.innerHTML = "Välkommen" + " " + inputValue;
    users.push(inputValue);
    localStorage.setItem("names", JSON.stringify(inputValue));
  }
});
for (let i = 0; i < users.length; i++) {
  let createLI = document.createElement("li");
  let thisUser = document.getElementById("visitors");
  createLI.innerHTML = users[i];
  thisUser.appendChild(createLI);
}
deleteButton.addEventListener("click", function changeClass() {
  document.getElementById("inputField").className = "delete";
});
