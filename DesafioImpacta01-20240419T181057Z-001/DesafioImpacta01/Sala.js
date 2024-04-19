class Sala {
    constructor(nome, disp) {
        this.nome = nome;
        this.disp = disp;
        this.dados = [];
        
    }

    

     povoarSala(dia, inicio, fim, Aluno) {
        /**
         * Preenche uma sala de aula com alunos.
         *
         * @param {string} dia - data em string mesmo.
         * @param {number} inicio - inicio em number.
         * @param {number} fim - fim em number.
         * @param  Aluno - Uma lista com os nomes dos alunos.
         * @returns {void}
         */

        const duracao = fim - inicio;

        const conflito = this.dados.some(dados =>

            dados.dia === dia &&
            dados.inicio === inicio &&
            dados.fim === fim

             
            
            
        );

        const conflito2 = this.dados.some(dados =>{
             
           if( dados.dia === dia && inicio >=  dados.inicio && fim<=dados.fim ){
            console.log(`${Aluno.nome}, Conflito de horários! Existe uma aula  ${dados.inicio}h às ${dados.fim}h na ${dados.dia} que impossibilita a sua marcação!.`);
            return true; 
           }

          return false;


        
       });


        if (conflito) {
            console.log(` ${Aluno.nome}, Conflito de horários! A aula das ${inicio}h às ${fim}h na ${dia} já está marcada .`);
        } 

        else if(conflito2){
        
            
        }

         else if (duracao > 5) {
        console.log(`${Aluno.nome}, Aula não foi agendada, visto que duração mínima da aula deve ser até 5 horas.`);
        
    }

    else if( inicio < 8 || fim > 18){
        console.log(`${Aluno.nome},Aula não foi agendada, horário de funcionamento das 8h ás 17h`);
    }
        
        else {
            this.dados.push({ dia, inicio, fim, Aluno });
            console.log(`${Aluno.nome}, Aula adicionada com sucesso!`);
        }
       
       
    }
    


    Exibir() {
        return (`${this.Aluno}  ${this.inicio}`);
    }
}

module.exports = Sala;




