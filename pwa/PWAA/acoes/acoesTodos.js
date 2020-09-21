// método para carregamento de dados offline

//só preciso saber isso na página de "todos recados"

// remover recado
const removeRecado = (id) => {
    const recado = document.querySelector('.recado[data-id=' + id + ']');
    recado.remove();
}

// adcionar recado
const adicionarRecado = (dados, id) => {
    const html =
        '<div class="recado" data-id=' + id + '><div class="content">' + dados.texto + '</div>' +
        '<button onclick="lermais(this)" > + ler mais</button> <i class="delete" data-id=' + id + '>' +
        '<svg  data-id=' + id + ' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" width="25px" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  data-id=' + id + ' fill="#EC5A5A" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></i></div>';
    recados.innerHTML += html;
}

db.collection('recados').onSnapshot((snapshot) => {
    console.log("docchanges", snapshot.docChanges());
    // para cada alteração no banco de dados vai adcionar ou remover
    snapshot.docChanges().forEach(change => {
        // console.log(change, change.doc.data(), change.doc.id, change.doc.createTime());
        if (change.type === 'added') {
            // adcionar à lista de recados
            adicionarRecado(change.doc.data(), change.doc.id);
        }
        else if (change.type === 'removed') {
            // remover da lista de recados
            removeRecado(change.doc.id);
        }
    })
})


// apagar recado
const containerRecados = document.querySelector('#iDrecados');
// console.log("rec", containerRecados)
containerRecados.addEventListener('click', event => {
    console.log(event);
    if (event.target.tagName === 'svg' || event.target.tagName === 'i' || event.target.tagName === 'path') {
        console.log("deletando")
        const id = event.target.getAttribute('data-id');
        db.collection('recados').doc(id).delete();
    }
})

