


var dataAtual = new Date //Retorna no formato Tue Mar 13 2018 15:23:51 GMT-0300 (-03)
dataAtual.toLocaleDateString() //Retorna no formato 13/03/2018


// adcionar novo recado
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const recado = {
        texto: form.textoRecado.value,
        data: this.dataAtual
    };
    db.collection('recados').add(recado)
        .catch(err => console.log("erro" + err));
    form.textoRecado.value = '';
})