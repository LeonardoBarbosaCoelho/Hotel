let nomeHotel = prompt('Insira o nome do hotel: ');
var nomeUser = prompt("Insira o nome do Usuário");
// senha: 2678

function inicio() {
    var senha = prompt("Insira a senha");
    
    if(senha === '2678'){
        alert('login efetuado com sucesso');
        alert('Bem vindo ao Hotel: ' + nomeHotel + ', ' + nomeUser + ' é um imenso prazer ter você por aqui!');
        var escolha = parseInt(prompt('Selecione uma opção: \n 1.) Reserva de Quartos \n 2.) Cadastro de Hóspedes \n 3.) Abastecimento de Carros \n 4.) Cadastro com pesquisa \n 5.) Festa \n 6.) Buffet \n 7.) Auditório \n 8.) reservaRestaurante \n 9.) ArCondicionado \n 10.) Sair'));

        switch (escolha){
            case 1:
                reserva_quartos();
                break;
            case 2:
                cadastro_hospedes();
                break;
            case 3:
                abastecer_carros();
                break;
            case 4:
                cadastro_hospedes_pesquisa();
                break;
            case 5:
                festa();
                break;
            case 6:
                buffet();
                break;
            case 7:
                auditorio();
                break;
            case 8:
                reservaRestaurante();
                break;    
            case 9:
                ar_condicionado();
                break;
            case 10:
                sair();
                break;
        }

    }else{
        alert('senha incorreta, tente novamente');
        inicio();
    }
}


function reserva_quartos() {
    alert('Hotel ' + nomeHotel + ', reserva de quartos');
    let valorDiaria = parseFloat(prompt('Insira o valor da diária:'));
    let qndtDias = parseInt(prompt('Diga a quantidade de dias'));

    if(valorDiaria > 0 && valorDiaria < 30 || qndtDias > 0 && qndtDias <= 30){
        let valorTotal = valorDiaria * qndtDias;
        alert('O valor de ' + 'qntdDias' + ' dias de hospedagem é de R$' + valorTotal);
        
        let nomeHospede = prompt('Qual o nome do hospéde?');
        let resposta = prompt(nomeUser + 'você confirma a hospedagem para' + nomeHospede + ' por ' + qndtDias + ' dias? S/N');

        switch(resposta){
            case 'S' && 's':
                alert(nomeUser + ', reserva efetuada para ' + nomeHospede + '. O valor total é de ' + valorTotal);
                break;
            case 'N' && 'n':
                alert(nomeUser + ', reserva não efetuada');
                inicio();
        }
    }else{
        alert('Valor inválido');
        inicio();
    }

}


function cadastro_hospedes() {
    alert('Cadastro de hóspedes');
    let valorDiaria = parseFloat(prompt('Qual o valor da diária?'));
    let totalHospedagem = 0;
    let qntdGratuidade = 0;
    let qntdMeia = 0;
    let loop = true;
    qntdHospedes = 1;
    
    while(loop == true){
        let nome = prompt('Insira o nome do ' + qntdHospedes + '° hospede: ');
        
        if(nome == 'PARE'){
            alert('Cadastro de hospedes finalizado!');
            alert(nomeUser + ' o valor total das hospedagens é: R$' + totalHospedagem + ', ' + qntdGratuidade + ' gratuidade(s) e ' + qntdMeia + ' meia(s)');
            loop = false;

        }else{

            let idade = parseInt(prompt('Insira a sua idade: '));

            if(idade <= 6){
                alert(nome + ' cadastrado(a) com sucesso, ' + nome + ' possui gratuidade');
                qntdGratuidade++;

            }else if(idade >= 60){
                alert(nome + ' cadastrado(a) com sucesso, ' + nome + ' paga meia');
                totalHospedagem += valorDiaria / 2;
                qntdMeia++;

            }

            else{
                alert(nome + ' cadastrado(a) com sucesso');
                totalHospedagem += valorDiaria;
            }

            qntdHospedes++;

        }   
    }
    
    inicio();
}


function cadastro_hospedes_pesquisa(){

    let continuarLoop = true;
    let hospedes = [];
    let nome;

    while(continuarLoop = true){
        let opcaoUser = parseInt(prompt('Escolha uma opção: 1)cadastrar; 2)pesquisar; 3)listar; 4)sair'));
        
        switch (opcaoUser){
            case 1:
                if(hospedes.length < 15){
                    nome = prompt('Qual o nome do Hóspede?');
                    alert('Hóspede ' + nome + ' foi cadastrado com sucesso!');
                    hospedes.push(nome);
                }else{
                    alert('Máximo de cadastros atingido');
                }
               
                break;
            
            case 2:
                let procura = prompt('Qual o nome do Hóspede?')
                if(hospedes.includes(procura)){
                    alert('Hóspede ' + procura + ' foi encontrada(o)!');

                }else{
                    alert('Hóspede ' + procura + ' não foi encontrada(o)!')

                }
                break;

            case 3:
                alert('Hospedes atualmente cadastrados: \n' + hospedes);
                break;
            
            case 4:
                alert('Voltando para a tela inicial...');
                inicio();       
        }
    }

}


function festa(){
    let horasEvento = parseFloat(prompt('Qual a duração do evento em horas? '));
    let qntdGarcoes = parseInt(prompt('Quantos garçons serão necessários? '));
    let resultadoEvento = horasEvento * qntdGarcoes * 10.50;

    alert('Custo total: R$' + resultadoEvento);
    let confirma = prompt('Gostaria de efetuar a reserva? S/N');

    if (confirma == 'S' || confirma == 's'){
        alert(nomeUser + ' reserva efetuada com sucesso.');
        inicio();
    } else{
        alert('Reserva não efetuada.');
        inicio();
    }
}


function buffet(){
    alert('Salão de festas!')
    let qntdConvidados = parseInt(prompt('Qual seria a quantidade de convidados? '));
    
    if(qntdConvidados <= 350){
        let cafezinho = qntdConvidados * 0.2;
        let agua = qntdConvidados * 0.5;
        let salgados = qntdConvidados * 7;
        let totalBuffet = (cafezinho * 0.8) + (agua * 0.4) + ((salgados / 100) * 34);
        alert('O evento precisará de ' + cafezinho + ' litros de café, ' +  agua + ' litros de água, ' + salgados +  ' salgados. O custo total do evento será de R$' + totalBuffet);

        let pergunta = prompt('Gostaria de efetuar a reserva? S/N');

        if(pergunta == 'S' || pergunta == 's'){
            alert(nomeUser + ', reserva efetuada com sucesso!');
            inicio();
        }else{
            alert('Reserva não realizada!');
            inicio();
        }

    }else{
        alert('quantidade de convidados superior à capacidade máxima!');
        buffet();
    }
}


function auditorio(){

    let qntdConvidados = prompt('Qual o número de convidados para o seu evento?');
    
    if(qntdConvidados > 350 || qntdConvidados < 0){
        alert('Quantidade de convidados inválido');
        auditorio();
        
    }else if(qntdConvidados <= 150){
        alert('Use o auditório laranja, não é necessário cadeiras adicionais');
        let escolha = prompt('Gostaria de efetuar a reserva? S/N');

        if(escolha == 'S' || escolha == 's'){
            alert(nomeUser + ', reserva efetuada');
            inicio();
        }else{
            alert(nomeUser + ', reserva não efetuada.');
            inicio();
        }
    
    
    }else if(qntdConvidados <= 220){ 
        let cadeirasAdd = qntdConvidados - 150;
        alert('Use o auditório laranja ( inclua mais ' + cadeirasAdd + ' cadeiras )');
        
        let escolha = prompt('Gostaria de efetuar a reserva? S/N');
        
        if(escolha == 'S' || escolha == 's'){
            alert(nomeUser + ', reserva efetuada');
            inicio();
        }else{
            alert(nomeUser + ', reserva não efetuada.');
            inicio();
        }

    }else{
        alert('Use o auditório Colorado');
        let escolha = prompt('Gostaria de efetuar a reserva? S/N');
        
        if(escolha == 'S' || escolha == 's'){
            alert(nomeUser + ', reserva efetuada');
            inicio();
        }else{
            alert(nomeUser + ', reserva não efetuada.');
            inicio();
        }
    }

}

function reservaRestaurante(){
    
    const diaSemana = {
        'segunda': {horaInicio: 7, horaTermino: 23},
        'terça':   {horaInicio: 7, horaTermino: 23},
        'quarta':  {horaInicio: 7, horaTermino: 23},
        'quinta':  {horaInicio: 7, horaTermino: 23},
        'sexta':   {horaInicio: 7, horaTermino: 23},
        'sabado':  {horaInicio: 7, horaTermino: 15},
        'domingo': {horaInicio: 7, horaTermino: 15},
    }

    let diaReserva = prompt('Qual dia da semana?');
    let horario = parseInt(prompt('Qual a hora do evento?'));
    
    if(horario >= diaSemana[diaReserva].horaInicio && horario <= diaSemana[diaReserva].horaTermino){
        let nomeEmpresa = prompt('Qual o nome da empresa?');
        alert('Restaurante reservado para ' + nomeEmpresa + '. ' + diaReserva + ' às ' + horario + 'hs.');
        inicio();
    }else{
        alert('Restaurante indisponível');
        reservaRestaurante();
    }
      
}


function abastecer_carros() {
    alert('Hotel, ' + nomeHotel + ' abastecer');
    let alcool_wayneOil = parseFloat(prompt('Qual o valor do álcool no posto Norte?'));
    let gasolina_wayneOil = parseFloat(prompt('Qual o valor da gasolina no posto Norte?'));
    let alcool_starkPetrol = parseFloat(prompt('Qual o valor do álcool no posto Sul?'));
    let gasolina_starkPetrol = parseFloat(prompt('Qual o valor da gasolina no posto Sul?'));

    if(alcool_wayneOil < 0.7 * gasolina_wayneOil && alcool_wayneOil < alcool_starkPetrol){
        alert('É mais barato abastecer com o alcool no posto Norte');
        inicio();

    }else if(gasolina_wayneOil < gasolina_starkPetrol){
        alert('É mais barato abastecer com a gasolina no posto Norte');
        inicio();
    
    }else if(alcool_starkPetrol < 0.7 * gasolina_starkPetrol){
        alert('É mais barato abastecer com o alcool da Sul');
        inicio();

    }else{
        alert('É mais barato abastecer com a gasolina da Sul');
        inicio();
    }
}


function ar_condicionado() {

    let empresaTerceirizada = [];
    let escolhaUser = 'S';
    
    while(escolhaUser == 'S'){
        let nomeEmpresa = prompt('Qual o nome da empresa?');
        let valorAparelho = parseFloat(prompt('Qual o valor do aparelho?'));
        let qntdAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
        let desconto = parseInt(prompt('Qual a porcentagem para desconto?'));
        let qntdMinimaDesconto = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

        let valorTotal = valorAparelho * qntdAparelhos;

        if(qntdAparelhos >= qntdMinimaDesconto){
            valorTotal = valorTotal - (valorTotal * (desconto / 100));
        }

        alert('O serviço de ' + nomeEmpresa + ' custará R$' + valorTotal);
        escolhaUser = prompt('Deseja informar novos dados, ' + 'teste' + '? (S/N)');
        escolhaUser = escolhaUser.toUpperCase();

        empresaTerceirizada.push({nome: nomeEmpresa, valor: valorTotal});
    }

    empresaTerceirizada.sort((a, b) => b.valor - a.valor);
    
    let menorValor = empresaTerceirizada[empresaTerceirizada.length - 1];
    alert('O orçamento de menor valor é o ' + menorValor.nome + ' por R$' + menorValor.valor);
    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 10');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert('Muito obrigado e até logo, ' + nomeUser);
        window.close();
    } else {
        inicio();
    }
}

inicio();