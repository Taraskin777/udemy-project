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

let numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", "");
console.log(numberOfFilms);
alert(`Ви подивилися вже ${numberOfFilms} фільмів!`);

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

let lastFilms = prompt("Один з останніх фільмів, який Ви дивилися?", "");
let lastFilmsScore = +prompt("На скільки Ви його оціните", "");
let lastFilms2 = prompt("Один з останніх фільмів, який Ви дивилися?", "");
let lastFilmsScore2 = +prompt("На скільки Ви його оціните", "");

personalMovieDB.movies[lastFilms] = lastFilmsScore;
personalMovieDB.movies[lastFilms2] = lastFilmsScore2;

console.log(personalMovieDB);
