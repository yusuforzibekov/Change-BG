const btn = document.querySelectorAll('.btn');
const nav = document.querySelector('.navbar');

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=>{
        let attr = btn[i].getAttribute('data-color');
        nav.style.background = attr;
    });
}