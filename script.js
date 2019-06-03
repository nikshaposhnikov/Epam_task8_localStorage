'use strict'
localStorage.setItem('email', 'nikshaposhnikov01@gmail.com');
if (localStorage.getItem('email') != 'nikshaposhnikov01@gmail.com') {
    localStorage.clear();
}
var menu = [];
var basket = [];

var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"
    , "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg"];
let buttonList = document.createElement("input",);
var ulList = document.createElement('ul');
var divTable = document.createElement('div');
divTable.style.className = 'divTable';
divTable.id = 'divTable';
var headerTable = document.createElement('headerTable');
var nav = document.createElement('nav');

buttonList.type = "button";
buttonList.value = "Список";
let counterList = 0;
buttonList.onclick = () => {
    if (counterTable != 0) {
        while (headerTable.hasChildNodes()) {
            headerTable.removeChild(headerTable.firstChild);
        }
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        counterTable = 0;
    }
    if (counterList == 0) {
        counterList += 1;
        drawList();
    }
};

let counterTable = 0;
let buttonTable = document.createElement("input",);
buttonTable.type = "button";
buttonTable.value = "Сетка";
buttonTable.onclick = () => {
    if (counterList != 0) {
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        counterList = 0;
    }
    if (counterTable == 0) {
        counterTable += 1;
        drawTable(menu);
    }
};
buttonTable.style.fontFamily = 'Montserrat,sans-serif';
buttonTable.style.textTransform = ' uppercase';
buttonTable.style.textAlign = ' center';
buttonTable.style.letterSpacing = ' 5px';
buttonTable.style.fontWeight = ' 600';
buttonTable.style.color = ' #524f4e';
buttonList.style.fontFamily = 'Montserrat,sans-serif';
buttonList.style.textTransform = ' uppercase';
buttonList.style.textAlign = ' center';
buttonList.style.letterSpacing = '5px';
buttonList.style.fontWeight = ' 600';
buttonList.style.color = ' #524f4e';

document.body.style.background = 'url(img/background3.jpg)';
buttonList.style.background = 'white';
buttonList.style.width = '50%';
buttonTable.style.width = '50%';
buttonTable.style.background = 'white';

nav.appendChild(buttonList);
nav.appendChild(buttonTable);
content.appendChild(nav);
let pizza = new Pizza("Margarita", ['сыр', ' ветчина', ' грибы'], 850, 120, images[0]);
menu.push(pizza);
let pizza2 = new Pizza("Bomba", ["сыр"], 700, 100, images[1]);
menu.push(pizza2);
let pizza3 = new Pizza("Tasty", ['сыр', ' грибы'], 650, 99, images[2]);
menu.push(pizza3);

let pizza4 = new Pizza("Full", ["ветчина"], 820, 112, images[3]);
menu.push(pizza4);
let pizza5 = new Pizza("Origin", ['сыр', ' помидоры', ' ветчина'], 950, 125, images[4]);
menu.push(pizza5);
let pizza6 = new Pizza("Best", ['сыр', ' помидоры', ' ветчина', ' грибы'], 1000, 118, images[5]);
menu.push(pizza6);
let pizza7 = new Pizza("pizza", ['ветчина', ' грибы'], 870, 130, images[6]);
menu.push(pizza7);
let pizza8 = new Pizza("Cool", ['салями', ' сыр', ' помидоры'], 870, 100, images[6]);
menu.push(pizza8);
let pizza9 = new Pizza("Mister", ['сыр', ' салями', ' ветчина'], 950, 101, images[8]);
menu.push(pizza9);
let pizza10 = new Pizza("Miss", ['сыр', ' помидоры', ' салями'], 730, 100, images[9]);
menu.push(pizza10);
let pizza11 = new Pizza("for girls", ['грибы', 'салями', 'ветчина'], 680, 115, images[10]);
menu.push(pizza11);
let pizza12 = new Pizza("for boys", ['сыр', ' помидоры', ' ветчина', ' грибы'], 870, 90, images[11]);
menu.push(pizza12);
let pizza13 = new Pizza("soccer", ['сыр', ' помидоры', ' салями', ' грибы'], 900, 98, images[12]);
menu.push(pizza13);
let pizza14 = new Pizza("goal", ["помидоры"], 620, 85, images[13]);
menu.push(pizza14);
let pizza15 = new Pizza("Keeper", ["салями"], 500, 100, images[14]);
menu.push(pizza15);
let pizza16 = new Pizza("Exist", ['сыр', ' помидоры'], 570, 105, images[15]);
menu.push(pizza16);

var compositionPizza = ["сыр", "помидоры", "салями", "ветчина", "грибы"];

function Pizza(name, composition, calories, price, img) {
    this.name = name;
    this.composition = composition;
    this.calories = calories;
    this.price = price;
    this.img = img;
}

function drawList() {
    while (headerTable.hasChildNodes()) {
        headerTable.removeChild(headerTable.firstChild);
    }
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    document.body.appendChild(ulList);
    ulList.style.font = '14px "Trebuchet MS", "Lucida Sans"';
    createSortingList();
    for (let i = 0; i < menu.length; i++) {
        let div = document.createElement('div');
        let li = document.createElement('li');
        let logo = document.createElement('img');
        li.style.padding = '.4em .4em .4em 2em';
        li.style.margin = '.5em 0';
        li.style.backgroundColor = ' rgba(231,231,231, 0.9)';
        li.style.borderRadius = '.3em';
        logo.src = "img/logo.png";
        logo.style.width = '30px';
        logo.style.height = '30px';
        logo.style.marginRight = '.4em';
        li.style.listStyleType = "none";
        li.style.marginBottom = '10px';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.textTransform = 'uppercase';
        div.style.letterSpacing = '2px';
        div.style.fontWeight = ' 600';
        div.style.fontSize = ' 15px';
        div.appendChild(logo);
        div.appendChild(document.createTextNode(menu[i].name + ', ' + menu[i].price + 'грн' + ', ' + menu[i].calories + 'ккал'));
        li.appendChild(div);
        ulList.appendChild(li);
    }
}

let counterForBasket = 0;

function drawTable(menuArr, counterForFilter) {
    if (counterForBasket != 0) {
        while (headerTable.hasChildNodes()) {
            headerTable.removeChild(headerTable.firstChild);
        }
        counterForBasket = 0;
    }
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    headerTable.style.display = "flex";
    headerTable.style.flexWrap = "wrap";
    document.body.appendChild(headerTable);
    divTable.style.display = "flex";
    divTable.style.flexWrap = "wrap";
    document.body.appendChild(divTable);
    if (counterForFilter == undefined) {
        createSorting();
        createFilter();
    }
    for (let i = 0; i < menuArr.length; i++) {
        let card = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('div');
        let composition = document.createElement('div');
        let caloriesAndPrice = document.createElement('div');
        let calories = document.createElement('div');
        let price = document.createElement('div');
        let buttonBuy = document.createElement("input");
        buttonBuy.type = "button";
        buttonBuy.value = "В корзину";
        buttonBuy.style.width = '200px';
        buttonBuy.style.height = '45px';
        buttonBuy.style.lineHeight = ' 45px';
        buttonBuy.style.borderRadius = '45px';
        buttonBuy.style.margin = ' 10px 20px';
        buttonBuy.style.fontFamily = 'Montserrat,sans-serif';
        buttonBuy.style.fontSize = ' 11px';
        buttonBuy.style.textTransform = ' uppercase';
        buttonBuy.style.textAlign = ' center';
        buttonBuy.style.letterSpacing = ' 1px';
        buttonBuy.style.fontWeight = ' 600';
        buttonBuy.style.color = ' white';
        buttonBuy.style.background = 'green';
        buttonBuy.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
        buttonBuy.onclick = () => {
            basket.push(menu[i]);
            let serialObj = JSON.stringify(menu[i]);
            localStorage.setItem(menu[i].name, serialObj);
            while (headerTable.hasChildNodes()) {
                headerTable.removeChild(headerTable.firstChild);
            }
            while (divTable.hasChildNodes()) {
                divTable.removeChild(divTable.firstChild);
            }
            drawTable(menu);
        };

        name.style.marginTop = '20px';
        name.style.textTransform = 'uppercase';
        name.style.fontWeight = 'bold';
        name.style.letterSpacing = '2px';
        composition.style.textTransform = 'uppercase';
        name.style.margin = 'auto';
        composition.style.marginTop = '20px';
        composition.style.marginTop = '20px';
        caloriesAndPrice.style.marginTop = '20px';
        card.style.display = "flex";
        caloriesAndPrice.style.display = "flex";
        caloriesAndPrice.style.width = '100%';
        card.style.className = 'cardPizza';
        price.className = 'pricePizza';
        calories.className = 'caloriesPizza';
        card.style.flexDirection = "column";
        card.style.minWidth = '30%';
        card.style.paddingLeft = '5px';
        card.style.border = '1px solid #b5e9a7';
        card.style.borderRadius = ' 3px';
        card.style.background = '#fff';
        card.style.backgroundColor = ' rgba(255,255,255, 0.95)';
        card.style.margin = '0 20px 20px 0';
        card.style.color = ' #474747';
        card.style.justifyContent = 'space-around';
        logo.src = menuArr[i].img;
        logo.alt = 'pizza';
        logo.style.margin = 'auto';
        logo.style.paddingTop = '5px';
        card.style.border = '2px solid black';
        composition.style.display = "flex";
        card.appendChild(logo);
        name.appendChild(document.createTextNode(menuArr[i].name));
        let compos = document.createElement('div');
        for (let a = 0; a < menuArr[i].composition.length; a++) {
            compos = document.createElement('div');
            compos.appendChild(document.createTextNode(menuArr[i].composition[a] + ', '));
            composition.appendChild(compos);
            compos.addEventListener("click", changeCompositionClick);
            compos.idForChangeCompos = i;
        }
        calories.appendChild(document.createTextNode(menuArr[i].calories + "ккал"));
        price.appendChild(document.createTextNode(menuArr[i].price + "грн"));
        price.style.color = 'green';
        price.style.fontSize = '25px';
        price.style.fontWeight = '500';
        price.style.marginLeft = '42%';
        card.appendChild(name);
        card.appendChild(composition);
        caloriesAndPrice.appendChild(calories);
        caloriesAndPrice.appendChild(price);
        card.appendChild(caloriesAndPrice);
        card.appendChild(buttonBuy);
        divTable.appendChild(card);
    }
}

let counterSortingCalories = 0;
let counterSortingPrice = 0;
let counterSorting = 0;

function createSorting() {
    let sortCalories = document.createElement("input",);
    sortCalories.type = "button";
    sortCalories.type = "button";
    sortCalories.value = "Каллории ↓";
    sortCalories.style.width = '150px';
    sortCalories.style.height = '45px';
    sortCalories.style.lineHeight = ' 45px';
    sortCalories.style.borderRadius = '45px';
    sortCalories.style.margin = ' 10px 20px';
    sortCalories.style.fontFamily = 'Montserrat,sans-serif';
    sortCalories.style.fontSize = ' 11px';
    sortCalories.style.textTransform = ' uppercase';
    sortCalories.style.textAlign = ' center';
    sortCalories.style.letterSpacing = ' 3px';
    sortCalories.style.fontWeight = ' 600';
    sortCalories.style.color = ' #524f4e';
    sortCalories.style.background = ' white';
    sortCalories.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortCalories.onclick = () => {
        if (counterSortingCalories == 0) {
            menu.sort(compareCaloriesTop);
            counterSortingCalories += 1;
            sortCalories.value = "Каллории ↑";
        } else {
            menu.sort(compareCaloriesBottom);
            counterSortingCalories = 0;
            sortCalories.value = "Каллории ↓";
        }

        ;drawTable(menu, counterSorting);
    };
    headerTable.appendChild(sortCalories);
    let sortPrice = document.createElement("input",);
    sortPrice.type = "button";
    sortPrice.value = "Цена ↓";
    sortPrice.style.width = '150px';
    sortPrice.style.height = '45px';
    sortPrice.style.lineHeight = ' 45px';
    sortPrice.style.borderRadius = '45px';
    sortPrice.style.margin = ' 10px 20px';
    sortPrice.style.fontFamily = 'Montserrat,sans-serif';
    sortPrice.style.fontSize = ' 11px';
    sortPrice.style.textTransform = ' uppercase';
    sortPrice.style.textAlign = ' center';
    sortPrice.style.letterSpacing = ' 3px';
    sortPrice.style.fontWeight = ' 600';
    sortPrice.style.color = ' #524f4e';
    sortPrice.style.background = ' white';
    sortPrice.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortPrice.onclick = () => {
        if (counterSortingPrice == 0) {
            menu.sort(comparePriceTop);
            counterSortingPrice += 1;
            sortPrice.value = "Цена ↑";
        } else {
            menu.sort(comparePriceBottom);
            counterSortingPrice = 0;
            sortPrice.value = "Цена ↓";
        }
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        ;drawTable(menu, counterSorting);
    };
    headerTable.appendChild(sortPrice);
    let buttonAdd = document.createElement("input");
    buttonAdd.type = "button";
    buttonAdd.value = "Создать пиццу";
    buttonAdd.style.width = '150px';
    buttonAdd.style.height = '45px';
    buttonAdd.style.lineHeight = ' 45px';
    buttonAdd.style.borderRadius = '45px';
    buttonAdd.style.margin = ' 10px 20px';
    buttonAdd.style.fontFamily = 'Montserrat,sans-serif';
    buttonAdd.style.fontSize = ' 11px';
    buttonAdd.style.textTransform = ' uppercase';
    buttonAdd.style.textAlign = ' center';
    buttonAdd.style.letterSpacing = ' 3px';
    buttonAdd.style.fontWeight = ' 600';
    buttonAdd.style.color = ' #524f4e';
    buttonAdd.style.background = ' white';
    buttonAdd.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    buttonAdd.addEventListener("click", createPizza);

    let buttonBasket = document.createElement("input");
    buttonBasket.type = "button";
    buttonBasket.value = "Корзина(" + basket.length + ')';
    buttonBasket.style.width = '150px';
    buttonBasket.style.height = '45px';
    buttonBasket.style.lineHeight = ' 45px';
    buttonBasket.style.borderRadius = '45px';
    buttonBasket.style.margin = ' 10px 20px';
    buttonBasket.style.fontFamily = 'Montserrat,sans-serif';
    buttonBasket.style.fontSize = ' 11px';
    buttonBasket.style.textTransform = ' uppercase';
    buttonBasket.style.textAlign = ' center';
    buttonBasket.style.letterSpacing = ' 3px';
    buttonBasket.style.fontWeight = ' 600';
    buttonBasket.style.color = ' #524f4e';
    buttonBasket.style.background = ' white';
    buttonBasket.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    buttonBasket.onclick = () => {
        if (basket.length == 0) {
            alert('Корзина пока пуста');
        } else {
            while (divTable.hasChildNodes()) {
                divTable.removeChild(divTable.firstChild);
            }
            while (headerTable.hasChildNodes()) {
                headerTable.removeChild(headerTable.firstChild);
            }
            createBasket();
        }
    };
    headerTable.appendChild(buttonAdd);
    headerTable.appendChild(buttonBasket);
}


function createBasket() {
    counterTable = 0;
    counterForBasket = 1;
    let buttonBuy = document.createElement("input");
    buttonBuy.type = "button";
    buttonBuy.value = "Оформить заказ";
    buttonBuy.style.width = '200px';
    buttonBuy.style.height = '45px';
    buttonBuy.style.lineHeight = ' 45px';
    buttonBuy.style.borderRadius = '45px';
    buttonBuy.style.margin = ' 10px 20px';
    buttonBuy.style.fontFamily = 'Montserrat,sans-serif';
    buttonBuy.style.fontSize = ' 11px';
    buttonBuy.style.textTransform = ' uppercase';
    buttonBuy.style.textAlign = ' center';
    buttonBuy.style.letterSpacing = ' 1px';
    buttonBuy.style.fontWeight = ' 600';
    buttonBuy.style.color = ' white';
    buttonBuy.style.background = 'green';
    buttonBuy.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    buttonBuy.onclick = () => {
        alert("Заказ оформлен");
        localStorage.clear();
        basket = [];
        drawTable(menu);

    };
    headerTable.appendChild(buttonBuy);
    let card = document.createElement('div');
    for (let i = 0; i < basket.length; i++) {
        card = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('div');
        let composition = document.createElement('div');
        let caloriesAndPrice = document.createElement('div');
        let calories = document.createElement('div');
        let price = document.createElement('div');
        let buttonRemove = document.createElement('input');
        buttonRemove.style.className = 'remove-button';
        buttonRemove.type = 'button';
        buttonRemove.value = '[x]';
        buttonRemove.style.width = '30px';
        buttonRemove.style.height = '30px';
        buttonRemove.style.border = 'none';
        buttonRemove.style.background = 'transparent';
        buttonRemove.style.fontSize = '110%';
        buttonRemove.style.color = 'darkred';
        buttonRemove.style.cursor = 'pointer';
        name.style.marginTop = '20px';
        name.style.textTransform = 'uppercase';
        name.style.fontWeight = 'bold';
        name.style.letterSpacing = '2px';
        composition.style.textTransform = 'uppercase';
        name.style.margin = 'auto';
        composition.style.marginTop = '20px';
        composition.style.marginTop = '20px';
        caloriesAndPrice.style.marginTop = '20px';
        card.style.display = "flex";
        caloriesAndPrice.style.display = "flex";
        caloriesAndPrice.style.width = '100%';
        card.style.className = 'cardPizza';
        price.className = 'pricePizza';
        calories.className = 'caloriesPizza';
        card.style.flexDirection = "column";
        card.style.minWidth = '30%';
        card.style.paddingLeft = '5px';
        card.style.border = '1px solid #b5e9a7';
        card.style.borderRadius = ' 3px';
        card.style.background = '#fff';
        card.style.backgroundColor = ' rgba(255,255,255, 0.95)';
        card.style.margin = '0 20px 20px 0';
        card.style.color = ' #474747';
        card.style.justifyContent = 'space-around';
        logo.src = basket[i].img;
        logo.alt = 'pizza';
        logo.style.margin = 'auto';
        logo.style.paddingTop = '5px';
        card.style.border = '2px solid black';
        composition.style.display = "flex";
        card.appendChild(buttonRemove);
        card.appendChild(logo);
        name.appendChild(document.createTextNode(basket[i].name));
        let compos = document.createElement('div');
        for (let a = 0; a < basket[i].composition.length; a++) {
            compos = document.createElement('div');
            compos.appendChild(document.createTextNode(basket[i].composition[a] + ', '));
            composition.appendChild(compos);
            compos.addEventListener("click", changeCompositionClick);
            compos.idForChangeCompos = i;
        }
        calories.appendChild(document.createTextNode(basket[i].calories + "ккал"));
        price.appendChild(document.createTextNode(basket[i].price + "грн"));
        price.style.color = 'green';
        price.style.fontSize = '25px';
        price.style.fontWeight = '500';
        price.style.marginLeft = '42%';
        card.appendChild(name);
        card.appendChild(composition);
        caloriesAndPrice.appendChild(calories);
        caloriesAndPrice.appendChild(price);
        card.appendChild(caloriesAndPrice);
        divTable.appendChild(card);
        buttonRemove.onclick = () => {
            deleteFromBasket(i);
        };

    }
}

function deleteFromBasket(i) {
    localStorage.removeItem(basket[i].name);
    basket.splice(basket.indexOf(basket[i]), 1);
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    while (headerTable.hasChildNodes()) {
        headerTable.removeChild(headerTable.firstChild);
    }
    createBasket();
}

let priceNewPizza = 40;
let caloriesNewPizza = 400;
let newPizzaCompos = [];
let createPizzaCounter = 0;

function createPizza() {
    counterTable = 0;
    newPizzaCompos = [];
    priceNewPizza = 40;
    caloriesNewPizza = 400;
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    while (headerTable.hasChildNodes()) {
        headerTable.removeChild(headerTable.firstChild);
    }
    let namePizza = document.createElement("input");
    let addPizza = document.createElement("input");
    namePizza.id = 'namePizza';
    namePizza.placeholder = 'Название пиццы';
    addPizza.type = 'button';
    addPizza.value = "Создать пиццу";
    addPizza.style.width = '150px';
    addPizza.style.height = '45px';
    addPizza.style.lineHeight = ' 45px';
    addPizza.style.border = '2px solid green';
    addPizza.style.borderRadius = '45px';
    addPizza.style.margin = ' 10px 20px';
    addPizza.style.fontFamily = 'Montserrat,sans-serif';
    addPizza.style.fontSize = ' 11px';
    addPizza.style.textTransform = ' uppercase';
    addPizza.style.textAlign = ' center';
    addPizza.style.letterSpacing = ' 3px';
    addPizza.style.fontWeight = ' 600';
    addPizza.style.color = ' #524f4e';
    addPizza.style.background = ' white';
    addPizza.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    let formCreatePizza = document.createElement('form');
    let formCreatePizzaContainer = document.createElement('div');
    formCreatePizzaContainer.style.display = 'flex';
    formCreatePizza.style.margin = '15px';
    formCreatePizzaContainer.style.margin = '10px';
    formCreatePizza.appendChild(namePizza);
    for (let i = 0; i < compositionPizza.length; i++) {
        let checkBox = document.createElement('input');
        let text = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.value = compositionPizza[i];
        checkBox.id = 'checkbox' + i;
        text.style.fontFamily = 'Montserrat,sans-serif';
        text.style.fontSize = ' 20px';
        checkBox.style.marginRight = ' 30px';
        text.appendChild(document.createTextNode(compositionPizza[i]));
        formCreatePizzaContainer.appendChild(text);
        formCreatePizzaContainer.appendChild(checkBox);
        formCreatePizzaContainer.style.background = '#fff';
        formCreatePizzaContainer.style.border = '1px solid black';
        formCreatePizzaContainer.style.borderRadius = '10px';
        formCreatePizza.appendChild(formCreatePizzaContainer);
        divTable.appendChild(formCreatePizza);
    }
    formCreatePizza.appendChild(addPizza);
    formCreatePizzaContainer.addEventListener("click", createPizzaClick);
    addPizza.onclick = () => {
        let strName = namePizza.value;
        strName = strName.replace(/\s+/g, '');
        if (strName === '') {
            alert('Название не может быть пустым');
        } else {
            createPizzaCounter += 1;
            let newPizza = new Pizza(namePizza.value, newPizzaCompos, caloriesNewPizza, priceNewPizza, images[6]);
            menu.push(newPizza);
            while (divTable.hasChildNodes()) {
                divTable.removeChild(divTable.firstChild);
            }
            while (headerTable.hasChildNodes()) {
                headerTable.removeChild(headerTable.firstChild);
            }
            drawTable(menu);
        }
    };

}

function createPizzaClick(e) {

    if (e.target.value.indexOf('сыр') != -1 && e.target.checked == true) {
        priceNewPizza += 40;
        caloriesNewPizza += 100;
        newPizzaCompos.push('сыр');
    }
    if (e.target.value.indexOf('помидоры') != -1 && e.target.checked == true) {
        priceNewPizza += 15;
        caloriesNewPizza += 80;
        newPizzaCompos.push('помидоры');
    }

    if (e.target.value.indexOf('ветчина') != -1 && e.target.checked == true) {
        priceNewPizza += 35;
        caloriesNewPizza += 120;
        newPizzaCompos.push('ветчина');
    }
    if (e.target.value.indexOf('грибы') != -1 && e.target.checked == true) {
        priceNewPizza += 20;
        caloriesNewPizza += 90;
        newPizzaCompos.push('грибы');
    }
    if (e.target.value.indexOf('салями') != -1 && e.target.checked == true) {
        priceNewPizza += 38;
        caloriesNewPizza += 150;
        newPizzaCompos.push('салями');
    }
}

function createSortingList() {
    let sortCalories = document.createElement("input");
    sortCalories.type = "button";
    sortCalories.value = "Каллории ";
    sortCalories.style.width = '150px';
    sortCalories.style.height = '45px';
    sortCalories.style.lineHeight = ' 45px';
    sortCalories.style.borderRadius = '45px';
    sortCalories.style.margin = ' 10px 20px';
    sortCalories.style.fontFamily = 'Montserrat,sans-serif';
    sortCalories.style.fontSize = ' 11px';
    sortCalories.style.textTransform = ' uppercase';
    sortCalories.style.textAlign = ' center';
    sortCalories.style.letterSpacing = ' 3px';
    sortCalories.style.fontWeight = ' 600';
    sortCalories.style.color = ' #524f4e';
    sortCalories.style.background = ' white';
    sortCalories.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortCalories.onclick = () => {
        if (counterSortingCalories == 0) {
            menu.sort(compareCaloriesTop);
            counterSortingCalories += 1;
            //  sortCalories.value = "Каллории ↑";
        } else {
            menu.sort(compareCaloriesBottom);
            counterSortingCalories = 0;
            // sortCalories.value = "Каллории↓";

        }
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        ;drawList();
    };

    ulList.appendChild(sortCalories);
    let sortPrice = document.createElement("input",);
    sortPrice.type = "button";
    sortPrice.value = "Цена ";
    sortPrice.style.width = '150px';
    sortPrice.style.height = '45px';
    sortPrice.style.lineHeight = ' 45px';
    sortPrice.style.borderRadius = '45px';
    sortPrice.style.margin = ' 10px 20px';
    sortPrice.style.fontFamily = 'Montserrat,sans-serif';
    sortPrice.style.fontSize = ' 11px';
    sortPrice.style.textTransform = ' uppercase';
    sortPrice.style.textAlign = ' center';
    sortPrice.style.letterSpacing = ' 3px';
    sortPrice.style.fontWeight = ' 600';
    sortPrice.style.color = ' #524f4e';
    sortPrice.style.background = ' white';
    sortPrice.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortPrice.onclick = () => {
        if (counterSortingPrice == 0) {
            menu.sort(comparePriceTop);
            counterSortingPrice += 1;
            // sortPrice.value = "Цена ↑";

        } else {
            menu.sort(comparePriceBottom);
            counterSortingPrice = 0;
            // sortPrice.value = "Цена ↓";
        }
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        ;drawList();
    };
    ulList.appendChild(sortPrice);

}

function createFilter() {
    var formFilter = document.createElement('form');
    var formFilterContainer = document.createElement('div');
    formFilterContainer.style.display = 'flex';
    formFilter.style.margin = '15px';
    formFilterContainer.style.margin = '10px';
    formFilter.id = 'formFilter';
    for (let i = 0; i < compositionPizza.length; i++) {
        var checkBox = document.createElement('input');
        let text = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.value = compositionPizza[i];
        checkBox.id = 'checkbox' + i;
        text.style.fontFamily = 'Montserrat,sans-serif';
        text.style.fontSize = ' 20px';
        checkBox.style.marginRight = ' 30px';
        text.appendChild(document.createTextNode(compositionPizza[i]));
        formFilterContainer.appendChild(text);
        formFilterContainer.appendChild(checkBox);
        formFilter.style.background = '#fff';
        formFilter.style.border = '1px solid black';
        formFilter.style.borderRadius = '10px';
        formFilter.appendChild(formFilterContainer);
        headerTable.appendChild(formFilter);
    }
    formFilter.addEventListener("click", filterOnClick);
}

let menuFiltered = [];
let counterFilter = 0;

function filterOnClick(e) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].composition.indexOf(e.target.value) != -1 && e.target.checked == true) {
            menuFiltered.push(menu[i]);
        }

        if (e.target.checked == false) {
            menuFiltered = [];
            document.getElementById("checkbox0").checked = false;
            document.getElementById("checkbox1").checked = false;
            document.getElementById("checkbox2").checked = false;
            document.getElementById("checkbox3").checked = false;
            document.getElementById("checkbox4").checked = false;
        }
    }
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    let result = [];
    nextInput:
        for (let i = 0; i < menuFiltered.length; i++) {
            let str = menuFiltered[i].name;
            for (let j = 0; j < result.length; j++) {
                if (result[j].name == str) continue nextInput;
            }
            result.push(menuFiltered[i]);
        }
    drawTable(result, counterFilter);
}

function changeCompositionClick(e) {
    let elemsPrice = document.getElementsByClassName('pricePizza');
    elemsPrice = Array.prototype.slice.call(elemsPrice);
    let elemsCal = document.getElementsByClassName('caloriesPizza');
    elemsCal = Array.prototype.slice.call(elemsCal);
    if (e.target.innerHTML.indexOf('сыр') != -1) {
        if (e.target.style.textDecoration != 'line-through') {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) - 20;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) - 120;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            // menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            //menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            //counterCheese += 1;
            e.target.style.textDecoration = 'line-through';
        } else {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) + 20;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) + 120;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            /*menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            counterCheese = 0;*/
            e.target.style.textDecoration = 'none';
        }
    }
    if (e.target.innerHTML.indexOf('помидоры') != -1) {
        if (e.target.style.textDecoration != 'line-through') {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) - 17;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) - 60;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            e.target.style.textDecoration = 'line-through';
            //menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            //menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
        } else {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) + 17;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) + 60;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            //menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            //menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'none';
        }
    }

    if (e.target.innerHTML.indexOf('ветчина') != -1) {
        if (e.target.style.textDecoration != 'line-through') {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) - 25;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) - 150;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            // menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            //  menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'line-through';
        } else {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) + 25;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) + 150;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            // menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            // menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'none';
        }
    }
    if (e.target.innerHTML.indexOf('грибы') != -1) {
        if (e.target.style.textDecoration != 'line-through') {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) - 18;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) - 90;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            // menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            // menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'line-through';
        } else {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) + 18;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) + 90;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            //menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            // menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'none';

        }
    }
    if (e.target.innerHTML.indexOf('салями') != -1) {
        if (e.target.style.textDecoration != 'line-through') {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) - 23;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) - 160;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            //  menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            //  menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'line-through';
        } else {
            elemsPrice[e.target.idForChangeCompos].innerHTML = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML.replace('Цена:', '')) + 23;
            elemsPrice[e.target.idForChangeCompos].innerHTML += 'грн';
            elemsCal[e.target.idForChangeCompos].innerHTML = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML.replace('Калории:', '')) + 160;
            elemsCal[e.target.idForChangeCompos].innerHTML += 'ккал';
            //menu[e.target.idForChangeCompos].price = parseInt(elemsPrice[e.target.idForChangeCompos].innerHTML);
            // menu[e.target.idForChangeCompos].calories = parseInt(elemsCal[e.target.idForChangeCompos].innerHTML);
            e.target.style.textDecoration = 'none';
        }
    }
}


function comparePriceTop(pizzaA, pizzaB) {
    return pizzaA.price - pizzaB.price;
}

function comparePriceBottom(pizzaA, pizzaB) {
    return pizzaB.price - pizzaA.price;
}

function compareCaloriesTop(pizzaA, pizzaB) {
    return pizzaA.calories - pizzaB.calories;
}

function compareCaloriesBottom(pizzaA, pizzaB) {
    return pizzaB.calories - pizzaA.calories;
}

