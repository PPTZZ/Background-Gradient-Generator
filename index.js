const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');


const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.innerText = body.style.background+';';
}

const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}

btn1.addEventListener('click', () => {
    color1.value = "#" + generateColor();
    setGradient();
});

btn2.addEventListener('click', () => {
    color2.value = "#" + generateColor();
    setGradient();
});

btn3.addEventListener('click',()=>{
    color1.value = "#" + generateColor();
    color2.value = "#" + generateColor();
    setGradient();
});



color1.addEventListener('input', setGradient);    
color2.addEventListener('input', setGradient);


