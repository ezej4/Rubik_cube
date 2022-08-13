const timerContainer = document.getElementById("timer");
const timerTrigger = document.getElementById("timer_trigger");
const timerMoves = document.getElementById("timer_moves");
const timerTime = document.getElementById("timer_time");
const timerStartTrigger = document.getElementById("play_timer");
const timerPauseTrigger = document.getElementById("pause_timer");
const timerStopTrigger = document.getElementById("stop_timer");
const timmerLogo = document.getElementById("timer_logo");
const timmerArrow = document.getElementById("timer_arrow");

let isTimerRunning = false;
let isTimerPaused = false;

let timeSeconds = 0;

const clearTimeVariables = () => {
  COUNT_MOVES = 0;
  timeSeconds = 0;
  isTimerRunning = false;
  isTimerPaused = false;
  timmerArrow.classList.remove("timer_arrow--animated");
  timmerLogo.classList.remove("timer__logo--animated");
};

const showTimer = () => {
  timerContainer.classList.toggle("timer--show", TIMER_VISIBLE);
  TIMER_VISIBLE = !TIMER_VISIBLE;
  clearTimeVariables();
};

const starTimer = () => {
  if (isTimerRunning) {
    return;
  }

  isTimerRunning = true;
  isTimerPaused = false;
  initAnimation();

  const interval = setInterval(() => {
    timeSeconds++;

    if (isTimerPaused) {
      clearInterval(interval);
      timeSeconds--;
      return;
    } else if (!isTimerRunning) {
      clearInterval(interval);
      clearTimeVariables();
    }

    const lastTwoDigits = timeSeconds % 100;
    if (lastTwoDigits === 60) {
      timeSeconds += 40;
    }

    if (timeSeconds >= 6000) {
      timeSeconds = 0;
    }
    updateTimerTime();
    updateTimerMoves();
  }, 1000);
};

const updateTimerMoves = () => {
  timerMoves.innerHTML = COUNT_MOVES;
};

const updateTimerTime = () => {
  const formatedTime = String(timeSeconds).padStart(4, 0);
  const [minutesFirst, minutesSecond, secondsFirst, secondsSecond] = formatedTime;
  const finalTime = `${minutesFirst}${minutesSecond}:${secondsFirst}${secondsSecond}`;

  timerTime.innerHTML = finalTime;
};

const stopTimer = () => {
  clearTimeVariables();
  updateTimerMoves();
  updateTimerTime();
};

const pauseTimer = () => {
  isTimerPaused = true;
  isTimerRunning = false;
  timmerArrow.style.animationPlayState = "paused";
  timmerLogo.style.animationPlayState = "paused";
};

const initAnimation = () => {
  timmerArrow.style.animationPlayState = "running";
  timmerLogo.style.animationPlayState = "running";

  timmerArrow.classList.add("timer_arrow--animated");
  timmerLogo.classList.add("timer__logo--animated");
};

showTimer();

timerTrigger.addEventListener("click", showTimer);
timerStopTrigger.addEventListener("click", stopTimer);
timerStartTrigger.addEventListener("click", starTimer);
timerPauseTrigger.addEventListener("click", pauseTimer);
