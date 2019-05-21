
class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }

    //Chamado método GET via AJAX segregado em nossa classe HttpService
    // Ele retorna uma Promise, portanto eu uso método 'then', ou seja, então faça...
    // Passo uma Arrow Function pegando o 'resolve' que é meu resultado e criando uma nova negociação e adc na tabela
    // Faço 'cath' para pegar os erros via 'reject' que pode acontecer nas promise, erros respectivos, 
    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this.http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                })
        });
    }


    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this.http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    //console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                })
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this.http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    //console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                })
        });
    }


}