const clock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  const currentTime = date.getMinutes();
  console.log(currentTime);
  const rotateClock = () => {
    clock.style.transform = `rotate(${currentTime * 6}deg)`;
  };
  rotateClock();
}, 1000);
console.log("hello");
