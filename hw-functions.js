//1. Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


function full (hamburgers, potato){
    if(hamburgers > 3 && potato > 0){
        console.log("Ми поїли")
    } else {
        console.log("Йдемо в інше кафе")
    }
}

full(4, 1);

//2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

function pricechecker(price){
    if(price > 999 && price < 1901){
        console.log("Ціна знаходиться в рамках між 1000 та 1900, становить " + price);
    } else {
        console.log ("Ціна не перебуває в рамках між 1000 та 1900, становить " + price);
    }
}
pricechecker (1115);

// 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//option 1

function pricechecker2(price1){
    if((price1>999 && price1<1901) != true){
    console.log("Ціна не знаходиться в межах 1000 та 1900, становить " + price1);
    } else{
    console.log("Ціна знаходиться в межах 1000 та 1900, становить " + price1);
    }
}
pricechecker2 (1004);

//option 2

function pricechecker3(price1){
    if((price1>999 && price1<1901) == true){
    console.log("Ціна знаходиться в межах 1000 та 1900, становить " + price1);
    } else{
    console.log("Ціна не знаходиться в межах 1000 та 1900, становить " + price1);
    }
}
pricechecker3 (1004);

// 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

function seasonchecker(season){
    if(season == 1){
    console.log("Winter");
    } else if(season == 2){
        console.log("Spring");
    } else if(season == 3){
        console.log("Summer")
    } else if(season == 4){
        console.log("Fall");
    } else{
        console.log("Please, use numbers from 1 to 4 to see the season")
    }
}
seasonchecker (3);

// 5. Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

function avg(a, b, c){
    if(a > b && a < c){
        console.log ("Average = a, a = " + a, " b = " + b, " c = " + c)
    } else if(a < b && a > c){
        console.log ("Average = a,  a = " + a, " b = " + b, " c = " + c)
    } else if (b > a && b < c){
        console.log ("Average = b,  a = " + a, " b = " + b, " c = " + c)
    } else if (b < a && b > c){
        console.log ("Average = b,  a = " + a, " b = " + b, " c = " + c)
    } else{
        console.log("Average = c,  a = " + a, " b = " + b, " c = " + c)
    }
}
avg(15, 19, 17);

// 6. Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

function weekday(day){
    switch(day){
        case 1: console.log("День тижня - Понеділок");
        break;
        case 2: console.log("День тижня - Вівторок");
        break;
        case 3: console.log("День тижня - Середа");
        break;
        case 4: console.log("День тижня - Четвер");
        break;
        case 5: console.log("День тижня - П'ятниця");
        break;
        case 6: console.log("День тижня - Субота");
        break;
        case 7: console.log("День тижня - Неділя");
        break;
    }
}
weekday(6);


// 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function calc(x, y, operator){
    switch (operator) {
        case "+":
            console.log(x + y);
            break;
        case "-":
            console.log(x - y);
            break;
        case "*":
            console.log(x * y);
            break;
        case "/":
            console.log(x / y);
            break;
    }
};

calc(2, 8, "*");

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression), 
//видалити голосні букви зі слова. 


function repl(word){
    let regexp = /[а\е\є\и\і\о\у\ю\я]/g;
    console.log(word.replace(regexp, ""));
}

repl("Революція");

// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)



function metersToKilometers(meters){
    let kilometers = meters/1000;

    let regexp1 = meters.toString().match(/.$/);
    let regexp2 = kilometers.toString().match(/.$/);

    let result1; 
    let result2;

    switch(regexp1[0]){
            case "1":
                result1="";
                break;
            case "2":
                result1="и";
                break;
            case "3":
                result1="и";
                break; 
            case "4":
                result1="и";
                break; 
            case "5":
                result1="ів";
                break; 
            case "6":
                result1="ів";
                break;
            case "7":
                result1="ів";
                break;
            case "8":
                result1="ів";
                break;
            case "9":
                result1="ів";
                break;
            case "0":
                result1="ів";
                break;
    }

    switch(regexp2[0]){
        case "1":
            result2="";
            break;
        case "2":
            result2="и";
            break;
        case "3":
            result2="и";
            break; 
        case "4":
            result2="и";
            break; 
        case "5":
            result2="ів";
            break; 
        case "6":
            result2="ів";
            break;
        case "7":
            result2="ів";
            break;
        case "8":
            result2="ів";
            break;
        case "9":
            result2="ів";
            break;
        case "0":
            result2="ів";
            break;
    }


    console.log(meters + " метр" + result1 + " - це",kilometers + " кілометр" + result2);
}
metersToKilometers(1045);    








