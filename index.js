const character = document.querySelector('#character');
const pet = document.querySelector('#pet');

document.addEventListener('keydown', function(event) {
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
    console.log(characterTop);
    console.log(petLeft);
    if(petLeft < 120 && petLeft > 50 && characterTop >=300)
    {
        alert('GAME OVER!!!');
    }
}, 10)
