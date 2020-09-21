

// adcionar novo recado
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const recado = {
        texto: form.textoRecado.value
    };
    db.collection('recados').add(recado)
        .catch(err => console.log("erro" + err));
    form.textoRecado.value = '';
})