let startbtn = document.querySelector("#startbtn");
let stopbtn = document.querySelector("#stopbtn");
let resetbtn = document.querySelector("#resetbtn");
let timerdisplay = document.querySelector(".timer-display");

let msec = 0;
let sec = 0;
let min = 0;
let timerid = null;
startbtn.addEventListener("click", () => {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(starttimer, 10);
});
stopbtn.addEventListener("click", () => {
  clearInterval(timerid);
});
resetbtn.addEventListener("click", () => {
  clearInterval(timerid);
  timerdisplay.innerText = `00 : 00 : 00`;

  msec = 0;
  sec = 0;
  min = 0;
});
function starttimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let msecstring = msec < 10 ? `0${msec}` : msec;
  let secstring = sec < 10 ? `0${sec}` : sec;
  let minstring = min < 10 ? `0${min}` : min;

  timerdisplay.innerText = `${minstring} : ${secstring} : ${msecstring}`;
}
