// elementos do DOM
const loginModal = document.getElementById("loginModal");
const signUpModal = document.getElementById("signUpModal");
const loginButton = document.getElementById("loginButton");
const signUpButton = document.getElementById("signUpButton");
const closeModal = document.getElementById("closeModal");
const closeSignUpModal = document.getElementById("closeSignUpModal");
const cancelButton = document.getElementById("cancelButton");
const cancelSignUpButton = document.getElementById("cancelSignUpButton");

// Abrir o modal de login
loginButton.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Abrir o modal de criaçao de conta
signUpButton.addEventListener("click", () => {
  signUpModal.style.display = "block";
});

// Fechar o modal de login
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Fechar o modal de criaçao de conta
closeSignUpModal.addEventListener("click", () => {
  signUpModal.style.display = "none";
});

// Cancelar o login
cancelButton.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Cancelar a criaçao de conta
cancelSignUpButton.addEventListener("click", () => {
  signUpModal.style.display = "none";
});

// Fechar modais ao clicar fora deles
window.addEventListener("click", (event) => {
  if (event.target === loginModal || event.target === signUpModal) {
    loginModal.style.display = "none";
    signUpModal.style.display = "none";
  }
});

// logou
document
  .querySelector("#loginModal form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // email como exemplo de nome de usuário
    const userName = document.getElementById("email").value;

    // Só pra guardar o nome do usuario
    sessionStorage.setItem("userName", userName);

    // abre a página "home"
    window.location.href = "home.html";
  });
