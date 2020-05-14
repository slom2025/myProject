'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    remembrMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("Средне");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман!");
        } else {
            console.log("error");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggLeVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre  = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }

};



/*personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (i != null && i != '') {
                
            } else {
                i--;
            }*/


            /*let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }*/