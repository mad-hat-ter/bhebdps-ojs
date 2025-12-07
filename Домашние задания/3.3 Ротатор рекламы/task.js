const rotator = document.querySelectorAll('.rotator__case');
active = 0
const intervalId = setInterval(() => {
    rotator[active].classList.remove('rotator__case_active')
    rotator[(active + 1) % rotator.length].classList.add('rotator__case_active')
    active  = (active +1) % rotator.length
    
    }, 1000);