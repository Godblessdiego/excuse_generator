/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let textoConcatenado = "";
  let excusa = document.getElementById("excuse");

  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];

  textoConcatenado += who[Math.floor(Math.random() * who.length)];
  textoConcatenado += action[Math.floor(Math.random() * action.length)];
  textoConcatenado += what[Math.floor(Math.random() * what.length)];
  textoConcatenado += when[Math.floor(Math.random() * when.length)];

  excusa.textContent = textoConcatenado;
};
