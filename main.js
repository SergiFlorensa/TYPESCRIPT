var arrayList = [];
function addElement() {
    var elementInput = document.getElementById('elementoInput');
    var elementValue = parseInt(elementInput.value);
    if (!isNaN(elementValue)) {
        arrayList.push(elementValue);
        displayList();
    }
}
function unshiftElement() {
    var elementInput = document.getElementById('elementoInput');
    var elementValue = parseInt(elementInput.value);
    if (!isNaN(elementValue)) {
        arrayList.unshift(elementValue);
        displayList();
    }
}
function insertAt() {
    var elementInput = document.getElementById('elementoInput');
    var elementValue = parseInt(elementInput.value);
    var indexInput = document.getElementById('removeIndexInput');
    var index = parseInt(indexInput.value);
    if (!isNaN(elementValue) && !isNaN(index) && index >= 0 && index <= arrayList.length) {
        arrayList.splice(index, 0, elementValue);
        displayList();
    }
}
function removePop() {
    if (arrayList.length > 0) {
        arrayList.pop();
        displayList();
    }
}
function removeShift() {
    if (arrayList.length > 0) {
        arrayList.shift();
        displayList();
    }
}
function removeAt() {
    var indexInput = document.getElementById('removeIndexInput');
    var index = parseInt(indexInput.value);
    if (!isNaN(index) && index >= 0 && index < arrayList.length) {
        arrayList.splice(index, 1);
        displayList();
    }
}
function removeByIndex() {
    var indexInput = document.getElementById('removeIndexInput');
    var index = parseInt(indexInput.value);
    if (!isNaN(index) && index >= 0 && index < arrayList.length) {
        var removeCount = parseInt(prompt('Ingrese la cantidad de elementos a eliminar'));
        if (!isNaN(removeCount) && removeCount > 0) {
            arrayList.splice(index, removeCount);
            displayList();
        }
    }
}
function displayList() {
    var listElement = document.getElementById('arrayList');
    listElement.innerHTML = '';
    for (var _i = 0, arrayList_1 = arrayList; _i < arrayList_1.length; _i++) {
        var element = arrayList_1[_i];
        var listItem = document.createElement('li');
        listItem.textContent = element.toString();
        listElement.appendChild(listItem);
    }
}
displayList();
