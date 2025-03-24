const express = require("express");

const server = express();

const porta = 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


let pessoas = [
    { id: 1, nome: "Carlos", Idade: 23 },
    { id: 2, nome: "Maria", Idade: 25 },
];

server.get("/pessoas", (req, res) => {
    res.json(pessoas);
});

server.get("/pessoas/:id", (req, res) => {
    const pessoa = pessoas.find(p => p.id == req.params.id);
    if (!pessoa) return res.status(404).send("Pessoa não encontrada");
    res.status(200).json(pessoa);
});

server.post("/pessoas", (req, res) => {
    const { id, nome, Idade } = req.body;
    if (!id || !nome || !Idade) {
        return res.status(400).send("Dados enviados estão incorretos");
    }
    const pessoa = { id, nome, Idade };
    pessoas.push(pessoa);
    res.status(201).send();
});

server.put("/pessoas/:id", (req, res) => {
    const id = req.params.id;
    const { nome, Idade } = req.body;
    const pessoaIndex = pessoas.findIndex(p => p.id == id);
    if (pessoaIndex === -1) return res.status(404).send("Pessoa não encontrada");
    if (!nome || !Idade) return res.status(400).send("Dados enviados estão incorretos");
    pessoas[pessoaIndex] = { id: parseInt(id), nome, Idade };
    res.status(200).send();
});

server.patch("/pessoas/:id", (req, res) => {
    const id = req.params.id;
    const { nome, Idade } = req.body;
    const pessoaIndex = pessoas.findIndex(p => p.id == id);
    if (pessoaIndex === -1) return res.status(404).send("Pessoa não encontrada");
    if (!nome && !Idade) return res.status(400).send("Dados enviados estão incorretos");
    if (nome) pessoas[pessoaIndex].nome = nome;
    if (Idade) pessoas[pessoaIndex].Idade = Idade;
    res.status(200).send();
});

server.delete("/pessoas/:id", (req, res) => {
    const id = req.params.id;
    const pessoaIndex = pessoas.findIndex(p => p.id == id);
    if (pessoaIndex === -1) return res.status(404).send("Pessoa não encontrada");
    pessoas.splice(pessoaIndex, 1);
    res.status(200).send();
});

server.post("/contato", (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).send("Dados enviados estão incorretos");
    }

    // Exibe os dados recebidos no terminal
    console.log("Mensagem recebida:");
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    res.status(201).send("Mensagem recebida com sucesso!");
});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});