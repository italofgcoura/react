export default class Services {
  getData = (setCliente) => {
    fetch("http://localhost:3000/clientes")
      .then((res) => res.json())
      .then((result) => {
        setCliente(result);
      })
      .catch(function (err) {
        console.error("Erro: Verificar rota e/ou api", err);
      });
  }
}
