const Sala = require('./Sala'); 
 const Aluno = require('./Aluno'); 


/////////////////// Criar as Salas//////////////////
///////////////////////////////////////////////////

const sala1 = new Sala("Sala01", true);
const sala2 = new Sala("Sala02", true);
const sala3 = new Sala("Sala03", true);
const sala4 = new Sala("Sala04", true);
const sala5 = new Sala("Sala05", true);
const sala6 = new Sala("Sala06", false);


//  console.log(sala.Exibir()); 


 /////////////////Criar os Alunos////////////////////
 ////////////////////////////////////////////////////

 const aluno01 = new Aluno("Ana", "01");
 const aluno02 = new Aluno("Yuri", "02");




///////////  adicionar salas no sistema/////
///////////////////////////////////////////////////


const disponibilidade = [];

async function adicionarSala(Sala) {
    return new Promise((resolve, reject) => {
        try {
            disponibilidade.push({ Sala });
            resolve("Sala adicionada com sucesso!");
        } catch (error) {
            reject("Erro ao adicionar a sala: " + error.message);
        }
    });
}




adicionarSala(sala1)
adicionarSala(sala2)
adicionarSala(sala3)
adicionarSala(sala4)
adicionarSala(sala5)
adicionarSala(sala6)

    .then(() => {
        console.log("\n")
        console.log("Todas as salas foram adicionadas.");
        console.log(disponibilidade);
    })
    .catch(erro => {
        console.error(erro);
    });


///////////////////////// agendar a sala ///////////////
////////////////////////////////////////////////////////


console.log("\n")
console.log("***********Mensagem de Confirmação dos agendamentos***********")
console.log("\n")


 sala4.povoarSala("19/04/2022",17,20,aluno01); // excede o horario 8h as 17h

sala4.povoarSala("12/03/2024",9,13,aluno02);

sala4.povoarSala("12/03/2024", 10, 11, aluno01); // conflito

sala4.povoarSala("19/04/2022", 11, 12, aluno02);

sala4.povoarSala("25/04/2022", 8, 15, aluno02); // excede a duração mínima de 5h por aula.

console.log("\n")

console.log("****************************************************************")

    ///// verificar as salas que estão disponiveis/////
    ///////////////////////////////////////////////////
     const agds = disponibilidade.filter(sala => sala.Sala.disp === true );
     //console.log(agds);
   
