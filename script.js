const list = [];

function addToList() {
    const item = document.getElementById("itemText").value;
    list.push(item);
    // generateList();
    let shoppingList = document.getElementById("itemList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    shoppingList.appendChild(li);
}

// function generateList() {
//     for (let i = 0; i < list.length; i++) {
//         let shoppingList = document.getElementById("itemList");
//         let li = document.createElement("li");
//         li.appendChild(document.createTextNode(list[i]));
//         shoppingList.appendChild(li);
//     }
// }

