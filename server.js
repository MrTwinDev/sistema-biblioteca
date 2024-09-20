const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.json());

// Configuração do PostgreSQL
const pool = new Pool({
  user: 'postgres',  // Usuário do PostgreSQL
  host: 'localhost', // Endereço do PostgreSQL
  database: 'biblioteca',  // O nome do banco de dados
  password: 'sua_senha',  // A senha do usuário PostgreSQL
  port: 5432,  // Porta padrão do PostgreSQL
});

// Rota para cadastrar um livro
app.post('/livros', async (req, res) => {
  const { nome } = req.body;
  try {
    const result = await pool.query('INSERT INTO livros (nome) VALUES ($1) RETURNING *', [nome]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para listar os livros
app.get('/livros', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM livros');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
