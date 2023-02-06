var userLogin = document.querySelector("#usuario")
var labelUserLogin = document.querySelector("#labelUsuarioCadastro")
var primeiraSenha = document.querySelector("#password")
var labelPrimeiraSenha = document.querySelector("#labelSenha")
var valideUsuario = false
var validePrimeiraSenha = false

function verSenha() {
  const verSenha = document.querySelector("#password")
  if (verSenha.getAttribute("type") == "password") {
    verSenha.setAttribute("type", "text")
  } else {
    verSenha.setAttribute("type", "password")
  }
}

userLogin.addEventListener("keyup", () => {
  if (userLogin.value.length <= 2) {
    labelUserLogin.setAttribute("style", "color: #800000")
    labelUserLogin.innerHTML =
      "<font size=2> Usuario: minimo 3 caracteres</font>"
    valideUsuario = false
  } else {
    labelUserLogin.setAttribute("style", "color: #006400")
    labelUserLogin.innerHTML = "<font size=2>  Nome de usuario valido !"
    valideUsuario = true
  }
  if (userLogin.value.length == "") {
    labelUserLogin.setAttribute("style", "color: white")
    labelUserLogin.innerHTML = "<font size=2>usuário"
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
    labelPrimeiraSenha.innerHTML = "<font size=2>Senha"
  }
})

function confirmarSenha() {
  userLogin = document.querySelector("#usuario")
  labelUserLogin = document.querySelector("#labelUsuarioCadastro")

  primeiraSenha = document.querySelector("#password")
  labelPrimeiraSenha = document.querySelector("#labelSenha")

  msgError = document.querySelector("#msgError")
  listaUsuario = []

  userValid = {
    usuario: "",
    senha: "",
  }

  listaUsuario = JSON.parse(localStorage.getItem("listUser"))

  listaUsuario.forEach((item) => {
    if (
      userLogin.value == item.usuarioCad &&
      primeiraSenha.value == item.primeiraSenhaCad
    ) {
      userValid = {
        usuario: item.usuarioCad,
        senha: item.primeiraSenhaCad,
      }
    }
  })

  if (
    userLogin.value == userValid.usuario &&
    primeiraSenha.value == userValid.senha
  ) {
    msgSuccess.setAttribute("style", "display: block")
    msgSuccess.innerHTML = "Login efetuado com Sucesso! Entrando no app..."
    msgError.setAttribute("style", "display: none")
    msgError.innerHTML = ""

    token =
      Math.random().toString(16).substr(2) +
      Math.random().toString(16).substr(2)
    localStorage.setItem("token", token)
    console.log(token)

    setTimeout(() => {
      window.location.href =
        "file:///C:/Users/thales.r.garcia/Desktop/projeto_habito/src/index.html"
    }, 2000)
  } else {
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong> Usuario e senha não encontrado !</strong>"
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""

    labelUserLogin.setAttribute("style", "color: #800000")
    labelUserLogin.innerHTML = "<font size=2> Usuario</font>"

    labelPrimeiraSenha.setAttribute("style", "color: #800000")
    labelPrimeiraSenha.innerHTML = "<font size=2> Senha</font>"
    usuario.focus()
  }
}
