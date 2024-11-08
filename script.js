// elementos do DOM
const loginModal = document.getElementById('loginModal');
const signUpModal = document.getElementById('signUpModal');
const habilidadesModal = document.getElementById('habilidadesModal');
const loginButton = document.getElementById('loginButton');
const signUpButton = document.getElementById('signUpButton');
const habilidadesButton = document.getElementById('habilidadesButton');
const closeModal = document.getElementById('closeModal');
const closeSignUpModal = document.getElementById('closeSignUpModal');
const closeHabilidadesModal = document.getElementById('closeHabilidadesModal');
const cancelButton = document.getElementById('cancelButton');
const cancelSignUpButton = document.getElementById('cancelSignUpButton');

// Abrir o modal de login
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Abrir o modal de criaçao de conta
signUpButton.addEventListener('click', () => {
    signUpModal.style.display = 'block';
});

// Abrir o modal de habilidades
habilidadesButton.addEventListener('click', () => {
    habilidadesModal.style.display = 'block';
    // Carregar o conteudo do arquivo habilidades.html (NÃO FUNCIONANDO)
    fetch('habilidades.html')
        .then(response => response.text())
        .then(data => {
            habilidadesModal.querySelector('.habilidades-content').innerHTML = data;
        })
        .catch(error => {
            habilidadesModal.querySelector('.habilidades-content').innerHTML = '<p>Erro de carregamento.</p>';
            console.error('Erro de carregamento:', error);
        });
});

// Fechar o modal de login
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Fechar o modal de criaçao de conta
closeSignUpModal.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Fechar o modal de habilidades
closeHabilidadesModal.addEventListener('click', () => {
    habilidadesModal.style.display = 'none';
});

// Cancelar o login
cancelButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Cancelar a criaçao de conta
cancelSignUpButton.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Fechar modais ao clicar fora deles
window.addEventListener('click', (event) => {
    if (event.target === loginModal || event.target === signUpModal || event.target === habilidadesModal) {
        loginModal.style.display = 'none';
        signUpModal.style.display = 'none';
        habilidadesModal.style.display = 'none';
    }
});
