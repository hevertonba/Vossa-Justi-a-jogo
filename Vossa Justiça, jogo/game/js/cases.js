const cases = [
    { 
        title: "ADI 5627", 
        description: "Ação Direta de Inconstitucionalidade contra a lei 13.654/2018 que altera os artigos 157 e 157-A do Código Penal.", 
        details: "Relator: Min. Gilmar Mendes, Advogados: Dr. João Silva e Dra. Maria Oliveira, Procurador: Dr. Paulo Souza" 
    },
    { 
        title: "ACO 1234", 
        description: "Ação Cível Originária referente à demarcação de terras indígenas no estado de Roraima.", 
        details: "Relator: Min. Rosa Weber, Advogados: Dr. Ana Pereira e Dr. Carlos Eduardo, Procurador: Dr. Ricardo Mendes" 
    },
    { 
        title: "AIRP 9101", 
        description: "Ação de Impugnação de Registro de Partido do Partido XYZ, alegando irregularidades na prestação de contas.", 
        details: "Relator: Min. Luiz Fux, Advogados: Dra. Laura Santos e Dr. Pedro Lima, Procurador: Dr. Fernando Torres" 
    },
    { 
        title: "RP 1121", 
        description: "Reclamação Constitucional para garantir a autoridade da decisão do STF no caso do mensalão.", 
        details: "Relator: Min. Carmen Lúcia, Advogados: Dra. Júlia Ribeiro e Dr. Marcos Almeida, Procurador: Dr. Roberto Teixeira" 
    },
    { 
        title: "ADPF 3141", 
        description: "Arguição de Descumprimento de Preceito Fundamental sobre a constitucionalidade da redução da maioridade penal.", 
        details: "Relator: Min. Marco Aurélio, Advogados: Dra. Bianca Fernandes e Dr. Lucas Costa, Procurador: Dr. André Santos" 
    },
    { 
        title: "ADI 5678", 
        description: "Ação Direta de Inconstitucionalidade sobre a lei estadual 10.123/2015 que altera o ICMS.", 
        details: "Relator: Min. Ricardo Lewandowski, Advogados: Dr. José Souza e Dra. Paula Ferreira, Procurador: Dr. Tiago Nogueira" 
    }
];

const ministers = [
    "Min. Gilmar Mendes", "Min. Rosa Weber", "Min. Luiz Fux", 
    "Min. Carmen Lúcia", "Min. Marco Aurélio", "Min. Ricardo Lewandowski",
    "Min. Alexandre de Moraes", "Min. Edson Fachin", "Min. Luís Roberto Barroso",
    "Min. Dias Toffoli", "Min. Nunes Marques"
];

function getRandomCase() {
    return cases[Math.floor(Math.random() * cases.length)];
}

function updateCaseDisplay(newCase) {
    document.getElementById("case-title").textContent = newCase.title;
    document.getElementById("case-description").textContent = newCase.description;
    document.getElementById("case-details").textContent = newCase.details;
}

function updateStatus(status) {
    document.getElementById("status").textContent = status;
}

function simulateVotes() {
    const votes = ministers.map(minister => {
        const vote = Math.random() > 0.5 ? "Aceita" : "Rejeita";
        return `<div class="vote">${minister}: ${vote}</div>`;
    }).join("");
    document.getElementById("votes").innerHTML = votes;
}
