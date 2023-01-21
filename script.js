//buscar tudo que há no form-habits e guardar no form
const form = document.querySelector("#form-habits")
//objeto construtor
const nlwSetup = new NLWSetup(form)
//buscar tudo que há no header button e guardar no button
const button = document.querySelector("header button")

//evento para ouvir ou fazer algo ao clicar o botão, chama a função add
button.addEventListener("click", add)
//função salvar apos clique no button
form.addEventListener("change", save)

//função add
function add() {
  //a variavel today vai receber a data do dia
  //cria-se um objeto da biblioteca Date e como a regra é receber DD-MM
  //entao usa tolocaleDateString("pt-br") para colocar em portugues
  // e corta o ano usando o slice
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //biblioteca dayExistis é false se a data nao repetir
  //com isso, a variavel dayExists recebe a biblioteca.função com parametro da data
  //const today = "03/01"
  //para simular outras datas voce pode comentar a linha de codigo acima e colocar assim quantas vezes quiser trocando a data para acrescentar manualmente outros dias!

  //para limpar, f12, aplication, localstorage e deleta.
  const dayExists = nlwSetup.dayExists(today)

  //se for true, ela entra no laço e da a mensagem que ja foi inserido esta data
  //... e retorna ao inicio, só vai para baixo se a data não for igual
  if (dayExists) {
    alert(" O dia já foi inserido ! ")
    return
  }

  //função da biblioteca que inclui a data escolhida
  nlwSetup.addDay(today)
}

//função save no LocalStorage
function save() {
  //localStorage esta substituindo um banco de dados e salvando no browser
  //setitem - são os itens que eu selecionar para salvar
  //cria uma variavel ou nome da chave, qualquer nome e usa a função JSON.stringify para trocar de objeto para string, e como parametro passa o objeto.data <- data sao os dados
  localStorage.setItem("Setup@habitos", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("Setup@habitos")) || {}

//function que inseri os dados na tela
nlwSetup.setData(data)
//dentro da data esta mais ou menos assim
//por exemplo: const data = {
//run ["01-01", "01-02"],
// sleep ["01-01", ["01-02"],
// }
//a biblioteca esta fazendo isso

//para compilar na pagina
nlwSetup.load()
