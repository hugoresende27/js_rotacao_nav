const abrir = document.getElementById('open');
const fechar = document.getElementById('close');
const x = document.querySelector('.main');

abrir.addEventListener('click', () => x.classList.add('show-nav'));
fechar.addEventListener('click', () => x.classList.remove('show-nav'));