//const clock = document.querySelector('.clock')
//const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
//setInterval(showClock, 1000)

let d = new Date();
let hands = [secondhand,minutehand,hourhand];
let initDeg = [6*d.getSeconds(), 6*d.getMinutes(), 30*(d.getHours()%12) + d.getMinutes()/2];

for (let i = 0; i < hands.length; i++) {
  let stepper = i == 0 ? 60 : 0;
  let animate = hands[i].animate([
    { transform: 'rotate(' + initDeg[i] + 'deg)' },
    { transform: 'rotate(' + (initDeg[i] + 360) + 'deg)' }
  ], {
    duration: 1000 * Math.pow(60, i + 1),
    easing: 'steps(' + stepper + ', start)',
    iterations: Infinity
  });
}

