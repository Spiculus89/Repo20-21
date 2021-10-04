let textArea = document.getElementById('textArea');

let backSpace = document.getElementById('backSpace');
let capsLock = document.getElementById('capsLock');
let shift = document.getElementById('shift');
let space = document.getElementById('space');
let enter = document.getElementById('enter');
let submit = document.getElementById('submit');
let minus = document.getElementById('minus');
let underscore = document.getElementById('underscore');

let keys = document.getElementsByClassName('key');
let letters = document.getElementsByClassName('letter');

const capitalize = () => {
    for (let i=0;i<letters.length;i++) {
        letters[i].style.textTransform = 'uppercase';
    }
}
const lowercase = () => {
    for (let i=0;i<letters.length;i++) {
        letters[i].style.textTransform = 'lowercase';
    }
}
space.addEventListener('click', () => textArea.innerHTML += ' ')
shift.addEventListener('click', () => textArea.innerHTML += '')
backSpace.addEventListener('click', () => { 
    textArea.innerHTML = textArea.innerHTML.substring(0, textArea.innerHTML.length-1)
})
minus.addEventListener('click', () => textArea.innerHTML += '-')
underscore.addEventListener('click', () => textArea.innerHTML += '_')
capsLock.addEventListener('click', () => {
    capsLock.classList.toggle('active')
    if (capsLock.classList.contains('active')) {
        capitalize()
    } else {
        lowercase()
    }
})

enter.addEventListener('click', () => textArea.innerHTML += '\n')
submit.addEventListener('click', () => {
    alert(textArea.innerHTML)
    textArea.innerHTML = ''
})

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', () => {
        if(capsLock.classList.contains('active')) {
            textArea.innerHTML += keys[i].innerHTML.toUpperCase()
        } else {
            textArea.innerHTML += keys[i].innerHTML.toLowerCase()

        }
    }
    )

}



