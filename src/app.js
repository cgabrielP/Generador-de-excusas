/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#refresh").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("hello world");
};
let generateExcuse = () => {
  let pronoun = ["The", "A"];
  let subject = ["dog", "driver", "random guy", "racoon", "pidgeot"];
  let action = ["took my", "stole my", "bit my", "pecked my", "popped my"];
  let object = ["head", "homework", "car", "shoe"];
  let place = ["on the street", "at the mall", "in my house"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let placeIndex = Math.floor(Math.random() * place.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    object[objectIndex] +
    " " +
    place[placeIndex]
  );
};
