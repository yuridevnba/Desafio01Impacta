const fs = require('fs');

const dados = {
    nome: 'Conservatório',
    idade: 30,
    cidade: 'Recife',
    endereco: 'Rua das Ninfas'
};

const dadosJSON = JSON.stringify(dados);

const nomeDoArquivo = 'dados.json';


fs.writeFile(nomeDoArquivo, dadosJSON, (err) => {
    if (err) {
        console.error('Ocorreu um erro na gravação:', err);
        return;
    }
    console.log("Arquivo JSON criado");

    
    fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Ocorreu um erro na leitura do arquivo:', err);
            return;
        }
        console.log('Conteúdo do arquivo JSON:');
        console.log(data);
    });
});
