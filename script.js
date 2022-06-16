const clock = document.querySelector(".clock");

function setTime (){
let date = new Date();
console.log(date);
let dayOrNight = "AM";
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

if(hour == 0){
    hour = 12;
}

if (hour>12){
    hour = hour-12;
    dayOrNight = "PM";
};

hour = (hour<10) ? "0"+hour : hour;
min = (min<10) ? "0"+min : min;
sec = (sec<10) ? "0"+sec : sec;

// console.log(hour, " : ", min, " : ", sec, " ", dayOrNight);

setTimeout(setTime,1000);
let theTime= hour + " : " + min + " : " + sec + " " + dayOrNight;
clock.innerHTML = theTime
}
setTime();

