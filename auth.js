// auth.js
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html"; // Redireciona para login se não autenticado
    }
});

// Função para sair
function logout() {
    localStorage.removeItem("isLoggedIn"); // Remove a sessão
    window.location.href = "login.html"; // Redireciona para a página de login
}
