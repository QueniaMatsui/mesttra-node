
const express = require('express');
const crypto = require ('crypto');

const app = express ();

app.use (express.json());

const tarefas = [
{
    Id: crypto.randomUUID(), 
    text: 'ir ao mercado',
    prazo: '2 dias'
},
{
    Id: crypto.randomUUID(), 
    text: 'estudar',
    prazo: '7 dias'
},
{
    Id: crypto.randomUUID(), 
    text: 'comer',
    prazo: '10 dias'
}
]

app.get ('/' , (req, res) => {
res.send ("Olá galera!"); 
})

app.get ('/tarefas', (req, res) => {
    res.send(tarefas);
})

app.get ('/tarefas/:id', (req, res) => {
const idParam = req.params.id;
const tarefa = tarefas.find((tarefa) => tarefa.id == idParam);

res.send(tarefa);

})

const port = 3000;

app.listen (port, () => {
    console.log('o app esta rodando na porta 3000')
})
