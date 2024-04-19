class Aluno {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    Exibir() {
        return (`${this.nome}  ${this.cpf}`);
    }
}
module.exports = Aluno;