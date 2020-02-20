const clock = document.querySelector('.clock')
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000)


