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

let numberOfFilms = prompt("Скільки фільмів Ви вже подивилися?", "");
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
