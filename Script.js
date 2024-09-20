// Função para exibir diferentes seções
function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Função para cadastrar livro (armazenado no localStorage)
function cadastrarLivro() {
    let bookName = document.getElementById('book-name').value;
    if (bookName) {
        let livros = JSON.parse(localStorage.getItem('livros')) || [];
        livros.push(bookName);
        localStorage.setItem('livros', JSON.stringify(livros));
        alert('Livro cadastrado com sucesso!');
        document.getElementById('book-name').value = '';
    } else {
        alert('Por favor, insira o nome do livro.');
    }
}

// Função para registrar empréstimo (armazenado no localStorage)
function emprestarLivro() {
    let userName = document.getElementById('user-name').value;
    let loanBook = document.getElementById('loan-book').value;
    if (userName && loanBook) {
        let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
        emprestimos.push({ userName, loanBook });
        localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
        alert('Empréstimo registrado com sucesso!');
        document.getElementById('user-name').value = '';
        document.getElementById('loan-book').value = '';
    } else {
        alert('Por favor, insira o nome do usuário e do livro.');
    }
}

// Função para devolver livro (atualizado no localStorage)
function devolverLivro() {
    let devolucaoBook = document.getElementById('devolucao-book').value;
    if (devolucaoBook) {
        let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
        let updatedEmprestimos = emprestimos.filter(emprestimo => emprestimo.loanBook !== devolucaoBook);
        localStorage.setItem('emprestimos', JSON.stringify(updatedEmprestimos));
        alert('Livro devolvido com sucesso!');
        document.getElementById('devolucao-book').value = '';
    } else {
        alert('Por favor, insira o nome do livro para devolução.');
    }
}
