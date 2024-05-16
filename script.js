const list = [];

function addToList() {
    const item = document.getElementById("itemText").value;
    list.push(item);
    reGenerateList();
    // let shoppingList = document.getElementById("itemList");
    // let li = document.createElement("li");
    // li.appendChild(document.createTextNode(item));
    // let deleteBtn = document.createElement("input");
    // deleteBtn.type = "button";
    // deleteBtn.value = "Delete";
    // deleteBtn.addEventListener("click", deleteItem);
    // deleteBtn.addEventListener("click", deleteItem = (item) => {
    //     alert("delete!");
    //     let index = list.indexOf(item);
    //     list.splice(index, 1);
    //     reGenerateList();
    // });
    // shoppingList.appendChild(li);
    // shoppingList.appendChild(deleteBtn);
}

function reGenerateList() {
    let shoppingList = document.getElementById("itemList");
    shoppingList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        // let shoppingList = document.getElementById("itemList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(list[i]));
        let deleteBtn = document.createElement("input");
        deleteBtn.type = "button";
        deleteBtn.value = "Delete";
        deleteBtn.addEventListener("click", deleteItem);
        shoppingList.appendChild(li);
        shoppingList.appendChild(deleteBtn);
    }
}

function deleteItem(item) {
    alert(item);
    let index = list.indexOf(item);
    list.splice(index, 1);

}