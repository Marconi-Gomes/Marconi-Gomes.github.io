// login.js
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    
// Adicione temporariamente este código após o login para verificar se a função é chamada
console.log("Login function called with username:", username, "and password:", password);

    // Credenciais de exemplo
    const validUsername = "ana";
    const validPassword = "123";

    // Verifica se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
        // Armazena a sessão
        localStorage.setItem("isLoggedIn", "true"); 
        // Redireciona para a página principal
        window.location.href = "index.html"; 
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha inválidos.";
    }
}

// auth.js
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Redireciona para login se não autenticado
    }
});
