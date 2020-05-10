'use strict';


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:  {},
    genres: [],
    privat: false
};
 



for (let i = 0; i < 2; i++) {
       let a = prompt("Один из последних просмотренных фильмов?", ''),
           b = prompt("На сколько оцените его?", '');
    
    personalMovieDB.movies[a] = b;

        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    
    } else {
        i--;
        console.log("Я дебил");
    }
};

/*let i = 0;

while (i < 2) {
   let a = prompt("Один из последних просмотренных фильмов?", ''),
       b = prompt("На сколько оцените его?", '');

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    i++;
    continue;
    } 
    else {
        i--;
        console.log("Введите ещё раз");
    }
};*/




if (personalMovieDB.count < 10) {
    console.log("мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Средне");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман!");
} else {
    console.log("error");
};





