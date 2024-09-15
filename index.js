import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase , ref, push  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:"https://console.firebase.google.com/project/realtime-database-be262/database/realtime-database-be262-default-rtdb/data/~2F" 
};
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())
    console.log(itemsArray)
})

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())


function appendItemToShoppingListEl(itemValue) {
    
    push(shoppingListInDB, inputValue)

    inputFieldEl.value = ""
    console.log(inputValue)
     shoppingListEl.innerHTML += `<li>${inputValue}</li>`
})
function render(groceries) {
    let listItems = ""
    for (let i = 0; i < groceries.length; i++) {
        listItems += `
            <li>
                    ${groceries[i]}
            </li>
        `
    }
