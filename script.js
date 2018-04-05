// Write your code here.
const today = new Date();
const dayOfWeek = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

console.log(`Dnes je : ${dayOfWeek[today.getDay()]}.
Aktuální čas je : ${hours} : ${minutes} : ${seconds}`);
