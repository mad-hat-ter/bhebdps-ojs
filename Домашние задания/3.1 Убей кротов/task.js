const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
for (let i = 0; i < hole.length; i++) {
    hole[i].addEventListener('click', () => {
        if (hole[i].classList.contains( 'hole_has-mole' )){
            dead.textContent ++
        } else{
        lost.textContent ++ 
        }
    if (dead.textContent >= 10){
        alert("Победа!");
        dead.textContent = 0
        lost.textContent = 0
    }
    else if (lost.textContent >= 5){
        alert("Вы проиграли!");
        dead.textContent = 0
        lost.textContent = 0
    }
    })
}