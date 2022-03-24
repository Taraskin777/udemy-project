"use strict";

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам є 15?", "");
// console.log(typeof (answer));

// const answers = [];

// answers[0] = prompt("Яке ваше ім'я ? ", "");
// answers[1] = prompt("Яке ваше прізвище ? ", "");
// answers[2] = prompt("Скільки Вам років ? ", "");

// console.log(answers);

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// function start() {
//   numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", "");
//   }
// }

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", "");
    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastFilms = prompt("Один з останніх фільмів, який Ви дивилися?", ""),
        lastFilmsScore = prompt("На скільки Ви його оціните", "");

      if (
        lastFilms == null ||
        lastFilmsScore == null ||
        lastFilms == "" ||
        lastFilmsScore == "" ||
        lastFilms.length > 50
      ) {
        console.log("error");
        i--;
      } else {
        personalMovieDB.movies[lastFilms] = lastFilmsScore;
        console.log("done");
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Ви подивилися мало фільмів!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert("Ви класичний глядач!");
    } else if (personalMovieDB.count > 30) {
      alert("Ви кіноман!");
    } else {
      alert("Вийшла помилка!");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log(false);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Ваш улюблений жанр під номером ${i}`, "");

      if (genre == "" || genre == null) {
        console.log("Ви ввели некоректні дані або не ввели їх зовсім");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
  },
};

// Спосіб 1

// let x = 0;
// while (x < 2) {
//   let lastFilms = prompt("Один з останніх фільмів, який Ви дивилися?", ""),
//     lastFilmsScore = prompt("На скільки Ви його оціните", "");

//   if (
//     lastFilms == null ||
//     lastFilmsScore == null ||
//     lastFilms == "" ||
//     lastFilmsScore == "" ||
//     lastFilms.length > 50
//   ) {
//     console.log("error");
//     x--;
//   } else {
//     personalMovieDB.movies[lastFilms] = lastFilmsScore;
//     console.log("done");
//   }
//   x++;
// }

// Спосіб 2

// let x = 0;
// do {
//   let lastFilms = prompt("Один з останніх фільмів, який Ви дивилися?", ""),
//     lastFilmsScore = prompt("На скільки Ви його оціните", "");

//   if (
//     lastFilms == null ||
//     lastFilmsScore == null ||
//     lastFilms == "" ||
//     lastFilmsScore == "" ||
//     lastFilms.length > 50
//   ) {
//     console.log("error");
//     x--;
//   } else {
//     personalMovieDB.movies[lastFilms] = lastFilmsScore;
//     console.log("done");
//   }
//   x++;
// } while (x < 2);

// Спосіб 3

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     let lastFilms = prompt("Один з останніх фільмів, який Ви дивилися?", ""),
//       lastFilmsScore = prompt("На скільки Ви його оціните", "");

//     if (
//       lastFilms == null ||
//       lastFilmsScore == null ||
//       lastFilms == "" ||
//       lastFilmsScore == "" ||
//       lastFilms.length > 50
//     ) {
//       console.log("error");
//       i--;
//     } else {
//       personalMovieDB.movies[lastFilms] = lastFilmsScore;
//       console.log("done");
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     alert("Ви подивилися мало фільмів!");
//   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     alert("Ви класичний глядач!");
//   } else if (personalMovieDB.count > 30) {
//     alert("Ви кіноман!");
//   } else {
//     alert("Вийшла помилка!");
//   }
// }

// detectPersonalLevel();

// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log(false);
//   }
// }

// showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш улюблений жанр під номером ${i}`,
      ""
    );
  }
}

writeYourGenres();

console.log(personalMovieDB);
