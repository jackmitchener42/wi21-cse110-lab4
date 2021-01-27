function sayTime(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}

setInterval(sayTime, 1000);