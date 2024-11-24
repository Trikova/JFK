function trocadepagina() {
    var botao1 = document.getElementById("pacote1");
    var botao2 = document.getElementById("pacote2");
    var botao3 = document.getElementById("pacote3");
    var botao4 = document.getElementById("pacote4");
    var botao5 = document.getElementById("pacote5");
    var botao6 = document.getElementById("pacote6");

    // Event listeners para os botões, alterando o valor da variável 'estado' e salvando no localStorage
    if (botao1) {
        botao1.addEventListener("click", function() {
            localStorage.setItem("estado", 1);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }

    if (botao2) {
        botao2.addEventListener("click", function() {
            localStorage.setItem("estado", 2);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }

    if (botao3) {
        botao3.addEventListener("click", function() {
            localStorage.setItem("estado", 3);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }

    if (botao4) {
        botao4.addEventListener("click", function() {
            localStorage.setItem("estado", 4);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }

    if (botao5) {
        botao5.addEventListener("click", function() {
            localStorage.setItem("estado", 5);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }

    if (botao6) {
        botao6.addEventListener("click", function() {
            localStorage.setItem("estado", 6);  // Salva no localStorage
            window.location.href = "pacotes.html";  // Navega para a outra página
        });
    }
}
