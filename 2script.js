'use strict';


let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
};

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function remembrMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", '');
     
     personalMovieDB.movies[a] = b;
 
         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
     
     } else {
         i--;
         console.log("Введите ещё раз");
     }
 }
}

//remembrMyFilms();

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

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Средне");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман!");
    } else {
        console.log("error");
    }
}

//detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();