const list = [];
const prevList = [];

function addToList() {
    const item = document.getElementById("itemText").value;
    list.push(item);
    reGenerateList();
}

function reGenerateList() {
    let shoppingList = document.getElementById("itemList");
    shoppingList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(list[i]));
        let deleteBtn = document.createElement("input");
        deleteBtn.type = "button";
        deleteBtn.value = "Delete";
        deleteBtn.addEventListener("click", function () {
            deleteItem(list[i]);
        }, false );
        let importantBtn = document.createElement("input");
        importantBtn.type = "button";
        importantBtn.value = "Important";
        importantBtn.id = "important";
        importantBtn.addEventListener("click", function () {
            importantize(list[i]);
        }, false );
        let prevBoughtBtn = document.createElement("input");
        prevBoughtBtn.type = "button";
        prevBoughtBtn.value = "prevBought";
        prevBoughtBtn.id = "previouslyBought";
        prevBoughtBtn.addEventListener("click", function () {
            toPrevious(list[i]);
        }, false );
        shoppingList.appendChild(li);
        shoppingList.appendChild(deleteBtn);
        shoppingList.appendChild(importantBtn);
        shoppingList.appendChild(prevBoughtBtn);
    }
}

function deleteItem(item) {
    let index = list.indexOf(item);
    list.splice(index, 1);
    reGenerateList();
}

function importantize(item) {
    let index = list.indexOf(item);
    while (index > 0) {
        let temp = list[index];
        let itemB = list[index - 1];
        list[index - 1] = temp;
        list[index] = itemB;
        index --;
    };
    document.getElementById("important").style.backgroundColor = 'yellow';
    reGenerateList();
}

function toPrevious(item) {
    let index = list.indexOf(item);
    list.splice(index, 1);
    prevList.push(item);
    reGenPrevList();
    reGenerateList();
}

function deletePrevItem(item) {
    let index = prevList.indexOf(item);
    prevList.splice(index, 1);
    reGenPrevList();
}

function reGenPrevList() {
    let previousList = document.getElementById("previousList");
    previousList.innerHTML = "";

    for (let i = 0; i < prevList.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(prevList[i]));
        let deleteBtn = document.createElement("input");
        deleteBtn.type = "button";
        deleteBtn.value = "Delete";
        deleteBtn.addEventListener("click", function () {
            deletePrevItem(prevList[i]);
        }, false );
        let importantBtn = document.createElement("input");
        importantBtn.type = "button";
        importantBtn.value = "Important";
        importantBtn.id = "important";
        importantBtn.addEventListener("click", function () {
            importantize(prevList[i]);
        }, false );
        previousList.appendChild(li);
        previousList.appendChild(deleteBtn);
        previousList.appendChild(importantBtn);
    }
}