/*eslint-env browser*/

function display_menu() {
  console.log("Welcome to the Inventory Management Application");
  console.log("");
  console.log("COMMAND MENU");
  console.log("view - View all products");
  console.log("update - Update a product");
  console.log("exit - Exit the program");
  console.log("");
}

function toString(product) {
  return product[0] + " " +product[1]+ " (" +product[2]+ ") $" +product[3]
}

function display(inventory) {
  console.log("ALL PRODUCTS:")
  var i = 1;
  inventory.forEach(function (product) {
      console.log(String(i) + ". " + toString(product));
      i += 1;
  });
  console.log("");
}

function display_update(inventory) {
  var isValid = false;
  var sku, quantity;
  while(!isValid) {
    sku = window.prompt("Enter SKU: ");
    if (sku !== null && !isNaN(sku)) {
      quantity = window.prompt("Quantity: ");
      if ((!isNaN(quantity)) && (quantity >=0)) {
        //we were able to update the inventory
        isValid = update(inventory, sku, quantity);
        if (!isValid) {
          alert("Unable to find product, incorrect SKU");
        }
      } else {
        alert("Please enter a valid integer > 0");
      }
    } else {
      alert("Please enter a valid SKU");
    }
  }
}

function update(inventory, sku, quantity) {
  for (i = 0; i<inventory.length; i++) {
    var product = inventory[i];
    // console.log(product[0]);
    // console.log(sku);
    if (sku==product[0]) {
      product[2] = parseInt(quantity);
      return true;
    }
  }
  return false;
}

function main() {
  var inventory, command;

  display_menu();

  var product1 = [4824, "Shirt", 10, 15.99]
  var product2 = [6343, "Jeans", 22, 39.99]
  var product3 = [3223, "Socks", 36, 9.99]
  var product4 = [2233, "Hat", 12, 14.99]
  var product5 = [9382, "Jacket", 5, 49.99]

  inventory = [product1, product2, product3, product4, product5]

  while (true) {
      command = window.prompt("Enter command");
      if (command !== null) {
          if (command === "view") {
              display(inventory);
          } else if (command === "update") {
              display_update(inventory);
          } else if (command === "exit") {
              break;
          } else {
              window.alert("That is not a valid command.");
          }
      } else {
          break;
      }
  }
  console.log("Program terminated.");
}
main();
