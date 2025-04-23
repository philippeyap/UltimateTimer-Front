let BACKEND_URL = 'https://ksu3pvy92z.us-east-1.awsapprunner.com/'


if (BACKEND_URL[BACKEND_URL.length - 1] === '/') {
  BACKEND_URL = BACKEND_URL.slice(0, -1);
}  

setInterval(function () {
  fetch(`${BACKEND_URL}/time`)
    .then(response => response.json())
    .then(data => {
      const timer = document.getElementById('timer');
      timer.innerHTML = data.time;
    });
}, 1000);
