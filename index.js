const character = document.querySelector('#character');
const pet = document.querySelector('#pet');

document.addEventListener('keydown', function(event) {
    jump();
});
document.addEventListener('click', function(event) {
    jump();
});

function jump(){
    if(character.classList != 'jump'){
        character.classList.add('jump');
    } 
    setTimeout(function() {
        character.classList.remove('jump');
    }, 1500)
}

let isAlive = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let petLeft= parseInt(window.getComputedStyle(pet).getPropertyValue('left'));
    if(petLeft < 90 && petLeft > 20 && characterTop >=300)
    {
        alert('GAME OVER!!!');
    }
}, 10)
