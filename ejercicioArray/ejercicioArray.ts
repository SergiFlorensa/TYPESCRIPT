let array: any[] = [];

function addRandomEmoticons(count: number) {
    const emoticons = ["😀", "😁", "😂", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "☺️", "🙂", "🤗", "🤩"];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * emoticons.length); // Elige un emoticono aleatorio de la lista
        array.push(emoticons[randomIndex]); // Añadir el emoticono al final del array
    }
    updateArrayContent();
}

function removeElements() {
    const index = parseInt((<HTMLInputElement>document.getElementById('removeElementIndex')).value);
    if (index >= 0 && index < array.length) {
        array.splice(index, 1); // Eliminar un elemento en una posición específica
        updateArrayContent();
    } else {
        console.log('Índice inválido');
    }
}

function unshiftRandomEmoticons(count: number) {
    const emoticons = ["😀", "😁", "😂", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "☺️", "🙂", "🤗", "🤩"];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * emoticons.length); // Elige un emoticono aleatorio de la lista
        array.unshift(emoticons[randomIndex]); // Añadir el emoticono al principio del array
    }
    updateArrayContent();
}

function shiftElement() {
    if (array.length > 0) {
        array.shift(); // Eliminar el primer elemento del array
        updateArrayContent();
    } else {
        console.log('Array vacío');
    }
}

function insertEmoticonAt(emoticon: string, index: number) {
    if (index >= 0 && index <= array.length) {
        array.splice(index, 0, emoticon); // Insertar el emoticono en la posición especificada
        updateArrayContent();
    } else {
        console.log('Índice inválido');
    }
}

function removeEmoticonAt(index: number) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1); // Eliminar un elemento en una posición específica
        updateArrayContent();
    } else {
        console.log('Índice inválido');
    }
}

function updateArrayContent() {
    const arrayContent = document.getElementById('arrayContent');
    if (arrayContent) {
        arrayContent.textContent = JSON.stringify(array); // Convertir el array a una cadena JSON y mostrarlo
    }
}
