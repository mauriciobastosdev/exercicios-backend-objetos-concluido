const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]
const nomeProcurado = "Carlos";
let posicao = 0;

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === nomeProcurado) {
        posicao = i + 1; // Adicionamos 1 à posição para contar a partir de 1.
        break; // Encontramos o Carlos, não precisamos continuar procurando.
    }
}

if (posicao !== -1) {
    console.log(`Galera... O ${nomeProcurado} está na posição ${posicao}, corre lá!`);
} else {
    console.log(`Ops! O ${nomeProcurado} não está na festa.`);
}