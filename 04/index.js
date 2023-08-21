const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
for (let i = 0; i < usuarios.length; i++) {
    idade = usuarios[i].idade;
    usuarios[i].maior_idade = idade > 17;
}
console.log(usuarios);