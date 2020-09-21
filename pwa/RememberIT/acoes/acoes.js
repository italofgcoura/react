const recados = document.querySelector('#iDrecados');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('sw registrado', reg))
    .catch((err) => console.log('Não registrado', err))
}


function lermais(element) {
  $(element).siblings(".content").toggleClass("content--full");
}


