function updateClock(){

    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hours = hours<10 ? "0" + hours:hours;
    min = min<10 ? "0" + min:min;
    sec = sec<10 ? "0" + sec:sec;

    const hoursEle = document.getElementById('hours');
    const minEle = document.getElementById('min');
    const secEle = document.getElementById('sec');

    hoursEle.textContent = hours;
    minEle.textContent = min;
    secEle.textContent = sec
}
setInterval(updateClock,1000);