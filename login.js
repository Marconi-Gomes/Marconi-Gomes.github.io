// login.js
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Credenciais de exemplo
    const validUsername = "ana";
    const validPassword = "123";
    
    

    // Verifica se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true"); // Armazena a sessão
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha inválidos.";
    }
}
// login.js
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Credenciais de exemplo
    const validUsername = "marconi";
    const validPassword = "123";
    
    

    // Verifica se as credenciais são válidas
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true"); // Armazena a sessão
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha inválidos.";
    }
}

