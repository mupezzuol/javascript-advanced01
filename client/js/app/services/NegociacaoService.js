'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoService = function () {
    function NegociacaoService() {
        _classCallCheck(this, NegociacaoService);

        this.http = new HttpService();
    }

    //Chamado método GET via AJAX segregado em nossa classe HttpService
    // Ele retorna uma Promise, portanto eu uso método 'then', ou seja, então faça...
    // Passo uma Arrow Function pegando o 'resolve' que é meu resultado e criando uma nova negociação e adc na tabela
    // Faço 'cath' para pegar os erros via 'reject' que pode acontecer nas promise, erros respectivos, 


    _createClass(NegociacaoService, [{
        key: 'obterNegociacoesDaSemana',
        value: function obterNegociacoesDaSemana() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.http.get('negociacoes/semana').then(function (negociacoes) {
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                });
            });
        }
    }, {
        key: 'obterNegociacoesDaSemanaAnterior',
        value: function obterNegociacoesDaSemanaAnterior() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.http.get('negociacoes/anterior').then(function (negociacoes) {
                    //console.log(negociacoes);
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                });
            });
        }
    }, {
        key: 'obterNegociacoesDaSemanaRetrasada',
        value: function obterNegociacoesDaSemanaRetrasada() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.http.get('negociacoes/retrasada').then(function (negociacoes) {
                    //console.log(negociacoes);
                    resolve(negociacoes.map(function (objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    }));
                }).catch(function (erro) {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                });
            });
        }
    }, {
        key: 'obterNegociacoes',
        value: function obterNegociacoes() {

            return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(function (periodos) {

                var negociacoes = periodos.reduce(function (dados, periodo) {
                    return dados.concat(periodo);
                }, []).map(function (dado) {
                    return new Negociacao(new Date(dado.data), dado.quantidade, dado.valor);
                });

                return negociacoes;
            }).catch(function (erro) {
                throw new Error(erro);
            });
        }
    }, {
        key: 'cadastra',
        value: function cadastra(negociacao) {
            return ConnectionFactory.getConnection().then(function (connection) {
                return new NegociacaoDao(connection);
            }).then(function (dao) {
                return dao.adiciona(negociacao);
            }).then(function () {
                return 'Negociação cadastrada com sucesso';
            }).catch(function (erro) {
                console.log(erro);
                throw new Error('Não foi possível adicionar a negociação');
            });
        }
    }, {
        key: 'apaga',
        value: function apaga() {
            return ConnectionFactory.getConnection().then(function (connection) {
                return new NegociacaoController(connection);
            }).then(function (dao) {
                return dao.apagaTodos();
            }).then(function () {
                return 'Negociações apagadas com sucesso';
            }).catch(function (erro) {
                console.log(erro);
                throw new Error('Não foi possível apagar as negociações');
            });
        }
    }, {
        key: 'lista',
        value: function lista() {
            return ConnectionFactory.getConnection().then(function (connection) {
                return new NegociacaoDao(connection);
            }).then(function (dao) {
                return dao.listaTodos();
            }).catch(function (erro) {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações');
            });
        }
    }, {
        key: 'importa',
        value: function importa(listaAtual) {
            return this.obterNegociacoes().then(function (negociacoes) {
                return negociacoes.filter(function (negociacao) {
                    return !listaAtual.some(function (negociacaoExistente) {
                        return JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente);
                    });
                });
            }).catch(function (erro) {
                console.log(erro);
                throw new Error("Não foi possível importar as negociações");
            });
        }
    }]);

    return NegociacaoService;
}();
//# sourceMappingURL=NegociacaoService.js.map