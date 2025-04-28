console.log("Перевірка підключеного файлу скриптів script.js");

//let itemsDiv = document.getElementById("items");

// if (itemsDiv) {
//     console.log(itemsDiv)
//     console.log('Поле classList: ', itemsDiv.classList)
//     console.log('Поле id: ', itemsDiv.id)
//     console.log('Поле clientWidth: ', itemsDiv.clientWidth)
//     console.log('Поле innerHTML: ', itemsDiv.innerHTML)
//     itemsDiv.innerText = 'Перший Програмно доданий текст'
//     itemsDiv.innerText += 'Другий Програмно доданий текст'
//     itemsDiv.innerText = '<h1>Відформатований HTML код</h1>'
// } else {
//     console.log('Блок товарів не знайдено')
// }

//if (itemsDiv) {
//console.log(itemsDiv)

/*itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'*/
/*for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }*/
//} else {
//console.log('Блок товарів не знайдено')
//}

async function getObjectsFromFile(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP помилка! статус: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка fetching JSON:", error);
  } finally {
    console.log("Fetch завершено!");
  }
}
async function buildItems() {
  const itemsData = await getObjectsFromFile("/items.json");
  console.log(itemsData);

  if (!itemsData) {
    console.error("Відсутні дані у JSON-файлі!");
    return;
  }

  const itemsDiv = document.getElementById("items");

  itemsData.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
  <div class="item-title">${item.title}</div>

  <div class="item-image">
    <img src="img/${item.photo}" alt="${item.title}" class="motokosa-img" />
  </div>

  <div class="parts-pay">
    <div><img src="img/mono-lapka.png" alt="" />${item.paw}</div>
    <div><img src="img/pb.png" alt="" />${item.pb}</div>
  </div>

  <div class="price">
    <div><span class="standart_price">${item.standart_price}</span><sup>грн</sup></div>
    <div><span>${item.price}</span><sup>грн</sup></div>
  </div>

  <div class="price bonus">
    ціна за купоном
    <div><span>${item.bonus_price}</span><sup>грн</sup></div>
  </div>
    `;

    itemsDiv.appendChild(itemDiv);
  });
}

buildItems();

/*if (itemsDiv) {
    itemsArray.forEach((item) => {
      itemsDiv.innerHTML += '<div class = "item"></div>'
    })
  } else {
    console.log('Блок товарів не знайдено')
  }*/
/*itemsArray.sort().forEach((item) => {
    console.log(item)
})*/
/*itemsArray.sort().forEach((item, index) => {
    console.log(index + '-й елемент: ', item)
  })*/
//console.log(itemsArray)
//itemsArray = itemsArray.sort()
/*for (let i = 0; i < itemsArray.length; i++){
    console.log(i + 'й елемент: ', itemsArray[i])
}*/
