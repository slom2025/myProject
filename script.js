'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData =  {
   budget : money,
   timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


let  dataOk = folse;

while (dataOk != true) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");   

    if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
         console.log("done");
         appData.expenses[a] = b;
         dataOk = true;
        }
    else {
        console.log("Введите ещё раз");
    }
}   

    // let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

    appData.moneyPerDay = appData.budget / 30; 

    alert("Ежедневный бюджет: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        console.log("мало");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
        console.log("средне");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Много!");
    } else {
        console.log("Произошла ошибка")
    };
