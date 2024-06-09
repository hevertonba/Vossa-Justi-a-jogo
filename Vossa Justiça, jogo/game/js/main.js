document.getElementById("accept-button").addEventListener("click", () => {
    updateStatus("Você aceitou o caso! Aguardando votos dos ministros...");
    simulateVotes();
    setTimeout(() => {
        const newCase = getRandomCase();
        updateCaseDisplay(newCase);
        updateStatus("Novo caso disponível.");
        document.getElementById("votes").innerHTML = "";
    }, 5000);
});

document.getElementById("reject-button").addEventListener("click", () => {
    updateStatus("Você rejeitou o caso! Aguardando votos dos ministros...");
    simulateVotes();
    setTimeout(() => {
        const newCase = getRandomCase();
        updateCaseDisplay(newCase);
        updateStatus("Novo caso disponível.");
        document.getElementById("votes").innerHTML = "";
    }, 5000);
});

// Inicializa com um caso aleatório
const initialCase = getRandomCase();
updateCaseDisplay(initialCase);

// Navegação entre abas
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        const target = document.querySelector(this.getAttribute('href'));
        target.classList.add('active');
    });
});

// Define a aba inicial como ativa
document.querySelector('nav a').click();
