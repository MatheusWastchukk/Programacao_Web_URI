# API de Gerenciamento de Pessoas

Esta API permite gerenciar uma lista de pessoas, realizando operações CRUD (Create, Read, Update, Delete) sobre os dados.

## Configuração do Projeto

1. **Instalação do Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. **Instalar dependências**:
   ```bash
   npm install
   ```

3. **Executar o servidor**:
   ```bash
   node index.js
   ```
   O servidor estará rodando em http://localhost:4000

## Endpoints da API

### GET - Listar todas as pessoas
```http
GET /pessoas
```
Exemplo de requisição:
```bash
curl -X GET http://localhost:4000/pessoas
```
Resposta esperada:
```json
[
  { "id": 1, "nome": "Carlos", "Idade": 23 },
  { "id": 2, "nome": "Maria", "Idade": 25 }
]
```

### GET - Obter uma pessoa por ID
```http
GET /pessoas/:id
```
Exemplo de requisição:
```bash
curl -X GET http://localhost:4000/pessoas/1
```
Resposta esperada:
```json
{ "id": 1, "nome": "Carlos", "Idade": 23 }
```
Resposta em caso de pessoa não encontrada:
```text
Pessoa não encontrada
```

### POST - Adicionar uma nova pessoa
```http
POST /pessoas
```
Exemplo de requisição:
```bash
curl -X POST http://localhost:4000/pessoas -H "Content-Type: application/json" -d '{"id": 3, "nome": "João", "Idade": 30}'
```
Resposta esperada:
- Status Code: 201 Created
- Corpo da resposta: Vazio

Resposta em caso de dados incorretos:
```text
Dados enviados estão incorretos
```

### PUT - Atualizar uma pessoa (substituir todos os campos)
```http
PUT /pessoas/:id
```
Exemplo de requisição:
```bash
curl -X PUT http://localhost:4000/pessoas/1 -H "Content-Type: application/json" -d '{"nome": "Carlos Silva", "Idade": 24}'
```
Resposta esperada:
- Status Code: 200 OK
- Corpo da resposta: Vazio

Resposta em caso de pessoa não encontrada:
```text
Pessoa não encontrada
```
Resposta em caso de dados incorretos:
```text
Dados enviados estão incorretos
```

### PATCH - Atualizar uma pessoa (atualizar campos específicos)
```http
PATCH /pessoas/:id
```
Exemplo de requisição:
```bash
curl -X PATCH http://localhost:4000/pessoas/1 -H "Content-Type: application/json" -d '{"nome": "Carlos Silva"}'
```
Resposta esperada:
- Status Code: 200 OK
- Corpo da resposta: Vazio

Resposta em caso de pessoa não encontrada:
```text
Pessoa não encontrada
```
Resposta em caso de dados incorretos:
```text
Dados enviados estão incorretos
```

### DELETE - Deletar uma pessoa
```http
DELETE /pessoas/:id
```
Exemplo de requisição:
```bash
curl -X DELETE http://localhost:4000/pessoas/1
```
Resposta esperada:
- Status Code: 200 OK
- Corpo da resposta: Vazio

Resposta em caso de pessoa não encontrada:
```text
Pessoa não encontrada
```

## Códigos de Status

- 200: Operação realizada com sucesso
- 201: Recurso criado com sucesso
- 400: Dados enviados estão incorretos
- 404: Pessoa não encontrada