// 7 Days of Code D-6 | Alura + Rafaella Ballerini

// Function to display the shopping list
function displayList(shop) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>My Shopping List Includes:</h2>';

    for (let category in shop) {
      if (shop[category].length > 0) {
          outputDiv.innerHTML += `<p><strong>${category}:</strong> ${shop[category].join(', ')}</p>`;
      } else {
          outputDiv.innerHTML += `<p><strong>${category}:</strong> None</p>`;
        }
      }
}

// Function to manage the shopping list
function shoppingList() {
    let shop = {
      Fruits: [],
      Vegetables: [],
      Dairy: [],
      Frozen: [],
      Sweets: [],
      Others: []
};

    while (true) {
      let action = prompt("Would you like to add or remove an item from your shopping list? Answer 'add', 'remove' or 'no'.").toLowerCase();

    while (action !== "add" && action !== "remove" && action !== "no") {
      alert(`Operation not recognized!`);
        action = prompt("Would you like to add or remove an item from your shopping list? Answer 'add', 'remove' or 'no'.").toLowerCase();
      }

    if (action === "no") {
      break; // Exit the main while loop
    } else if (action === "add") {
      let food = prompt("What type of food do you want to include?");
      let category = prompt("Which category does this food belong to: 'fruits', 'vegetables', 'dairy', 'frozen', 'sweets', or 'others'?").toLowerCase();

        switch (category) {
          case "fruits":
              shop.Fruits.push(food);
              break;
          case "vegetables":
              shop.Vegetables.push(food);
              break;
          case "dairy":
              shop.Dairy.push(food);
              break;
          case "frozen":
              shop.Frozen.push(food);
              break;
          case "sweets":
              shop.Sweets.push(food);
              break;
          case "others":
              shop.Others.push(food);
              break;
              default:
              alert("This category is not predefined.");
              break;
          }
        } else if (action === "remove") {
        // Display the current shopping list before removing an item
        displayList(shop);

      let itemToRemove = prompt("Which item do you want to remove? (Enter the full name of the item)");

      let found = false;
      for (let category in shop) {
      let index = shop[category].indexOf(itemToRemove);
        if (index !== -1) {
            shop[category].splice(index, 1);
            alert(`The item "${itemToRemove}" was successfully removed from the ${category} category!`);
            found = true;
            break;
        }
      }

        if (!found) {
            alert(`The item "${itemToRemove}" was not found in any category!`);
        }
      }
    }

    // Display the updated shopping list in the HTML element
    displayList(shop);
}