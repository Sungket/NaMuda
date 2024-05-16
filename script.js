const list = [];

function add() {
    const item = document.getElementById("itemText");
    list.push(item);
    alert("item added");
    generateList();
}

function generateList() {
    for (let i = 0; i < list.length; i++) {
        let shoppingList = document.getElementById("itemList");
        shoppingList.append(list[i]);
    }
}
