console.log("Перевірка підключеного файлу скриптів market.js");




let items = document.getElementById("item");


if (itemDiv) {

    console.log(itemDiv);

    console.log('Поле classList: ', itemDiv.classList);
    console.log('Поле  id: ', itemDiv.id);
    console.log('Поле clientWidth: ', itemDiv.clientWidth);
    console.log('Поле innerHTML: ', itemDiv.innerHTML);

    itemDiv.innerText = 'Програмно доданий текст';
    
} else {
    console.log("Блок товарів не знайдено");
}