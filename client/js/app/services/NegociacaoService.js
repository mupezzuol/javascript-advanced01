
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

    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));

            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });
    }



    cadastra(negociacao) {
        return ConnectionFactory
           .getConnection()
           .then(conexao => new NegociacaoDao(conexao))
           .then(dao => dao.adiciona(negociacao))
           .then(() => 'Negociação cadastrada com sucesso')
           .catch(erro => {
               throw new Error("Não foi possível adicionar a negociação")
           });
   }


}