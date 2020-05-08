'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData =  {
   budget : money,
   timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = prompt("Во сколько обойдется?");

alert(appData.budget / 30); 


