var usuarioCadastro = document.querySelector("#usuarioCadastro")
var labelUsuarioCadastro = document.querySelector("#labelUsuarioCadastro")
var email = document.querySelector("#email")
var labelEmail = document.querySelector("#labelEmail")
var primeiraSenha = document.querySelector("#primeiraSenha")
var labelPrimeiraSenha = document.querySelector("#labelPrimeiraSenha")
var segundaSenha = document.querySelector("#segundaSenha")
var labelSegundaSenha = document.querySelector("#labelSegundaSenha")
var msgError = document.querySelector("#msgError")
var msgSuccess = document.querySelector("#msgSuccess")
var valideUsuario = false
var valideEmail = false
var validePrimeiraSenha = false
var valideSegundaSenha = false

usuarioCadastro.addEventListener("keyup", () => {
  if (usuarioCadastro.value.length <= 2) {
    labelUsuarioCadastro.setAttribute("style", "color: #800000")
    labelUsuarioCadastro.innerHTML =
      "<font size=2> Usuario: minimo 3 caracteres</font>"
    valideUsuario = false
  } else {
    labelUsuarioCadastro.setAttribute("style", "color: #006400")
    labelUsuarioCadastro.innerHTML = "<font size=2>  Nome de usuario valido !"
    valideUsuario = true
  }
  if (usuarioCadastro.value.length == "") {
    labelUsuarioCadastro.setAttribute("style", "color: white")
    labelUsuarioCadastro.innerHTML = "<font size=2>Informe nome de usuario"
  }
})

email.addEventListener("keyup", () => {
  if (email.value.length <= 9) {
    labelEmail.setAttribute("style", "color: #800000")
    labelEmail.innerHTML = "<font size=2> Insira um e-mail valido </font>"
    valideEmail = false
  } else {
    labelEmail.setAttribute("style", "color: #006400")
    labelEmail.innerHTML = "<font size=2>  E-mail informado valido !"
    valideEmail = true
  }
  if (email.value.length == "") {
    labelEmail.setAttribute("style", "color: white")
    labelEmail.innerHTML = "<font size=2>Informe e-mail de usuario"
  }
})

primeiraSenha.addEventListener("keyup", () => {
  if (primeiraSenha.value.length <= 7) {
    labelPrimeiraSenha.setAttribute("style", "color: #800000")
    labelPrimeiraSenha.innerHTML =
      "<font size=2> Sua senha deve conter 8 caracteres </font>"
    validePrimeiraSenha = false
  } else {
    labelPrimeiraSenha.setAttribute("style", "color: #006400")
    labelPrimeiraSenha.innerHTML = "<font size=2>  Senha informada Valida !"
    validePrimeiraSenha = true
  }
  if (primeiraSenha.value.length == "") {
    labelPrimeiraSenha.setAttribute("style", "color: white")
    labelPrimeiraSenha.innerHTML = "<font size=2>Informe uma senha"
  }
})

segundaSenha.addEventListener("keyup", () => {
  if (primeiraSenha.value != segundaSenha.value) {
    labelSegundaSenha.setAttribute("style", "color: #800000")
    labelSegundaSenha.innerHTML =
      "<font size=2> Escreva novamente sua Senha </font>"
    valideSegundaSenha = false
  } else {
    labelSegundaSenha.setAttribute("style", "color: #006400")
    labelSegundaSenha.innerHTML = " <font size=2> A senha está correta !"
    valideSegundaSenha = true
  }
  if (segundaSenha.value.length == "") {
    labelSegundaSenha.setAttribute("style", "color: white")
    labelSegundaSenha.innerHTML = "<font size=2>Confirme sua senha"
  }
})

function verPrimeiraSenha() {
  const verPrimeiraSenha = document.querySelector("#primeiraSenha")
  if (verPrimeiraSenha.getAttribute("type") == "password") {
    verPrimeiraSenha.setAttribute("type", "text")
  } else {
    verPrimeiraSenha.setAttribute("type", "password")
  }
}

function verSegundaSenha() {
  const verSegundaSenha = document.querySelector("#segundaSenha")
  if (verSegundaSenha.getAttribute("type") == "password") {
    verSegundaSenha.setAttribute("type", "text")
  } else {
    verSegundaSenha.setAttribute("type", "password")
  }
}

function cadastrar() {
  if (
    valideUsuario &&
    valideEmail &&
    validePrimeiraSenha &&
    valideSegundaSenha
  ) {
    listUser = JSON.parse(localStorage.getItem("listUser") || "[]")

    listUser.push({
      usuarioCad: usuarioCadastro.value,
      emailCad: email.value,
      primeiraSenhaCad: primeiraSenha.value,
    })

    localStorage.setItem("listUser", JSON.stringify(listUser))

    msgSuccess.setAttribute("style", "display: block")
    msgSuccess.innerHTML = "Cadastrando usuario..."
    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    setTimeout(() => {
      window.location.href =
        "file:///C:/Users/thales.r.garcia/Desktop/projeto_habito/src/modules/login/login.html"
    }, 2000)
  } else {
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML =
      "<strong> Preencha todos campos para registrar o usuario</strong>"
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""
  }
}
