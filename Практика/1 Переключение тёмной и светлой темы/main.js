const body = document.querySelector('body');
const checkbox = document.getElementById('checkbox');
checkbox.onchange = () => body.classList.toggle('light-mode');