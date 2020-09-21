// método para carregamento de dados offline

db.enablePersistence()
    .catch(err => {
        if (err.code == 'failed-precondition') {
            console.log("falhou persistência")
        }
        else if (err.code == 'unimplemented') {
            console.log("persistência não implementada")
        }
    })
    
