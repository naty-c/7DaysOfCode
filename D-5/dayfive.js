// 7 Days of Code D-5 | Alura + Rafaella Ballerini

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
        let addMore = prompt("Would you like to add an item to your shopping list? (yes/no)").toLowerCase();
        if (addMore === 'no' || addMore === 'n') {
          break;
        }

        if (addMore === 'yes' || addMore === 'y') {
          let food = prompt("What type of food do you want to include?");
          let category = prompt("Which category? (Fruits, Vegetables, Dairy, Frozen, Sweets, Others)").toLowerCase();

          switch (category) {
            case 'fruits':
                shop.Fruits.push(food);
              break;
            case 'vegetables':
                shop.Vegetables.push(food);
              break;
            case 'dairy':
                shop.Dairy.push(food);
              break;
            case 'frozen':
                shop.Frozen.push(food);
              break;
            case 'sweets':
                shop.Sweets.push(food);
              break;
            default:
                shop.Others.push(food);
              break;
          }
        } else {
          alert("Invalid answer! Please respond with 'yes' or 'no'.");
        }
      }

      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '<h2>My list includes:</h2>';

      for (let category in shop) {
        if (shop[category].length > 0) {
            outputDiv.innerHTML += `<p><strong>${category}:</strong> ${shop[category].join(', ')}</p>`;

            // Console display
            console.log(`    ${category.charAt(0).toUpperCase() + category.slice(1)}: ${shop[category].join(', ')}`);
        } else {
            outputDiv.innerHTML += `<p><strong>${category}:</strong> None</p>`;

            // Console display
            console.log(`    ${category.charAt(0).toUpperCase() + category.slice(1)}:`);
        }
      }
    }

    shoppingList();