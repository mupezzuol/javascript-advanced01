"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNegociacoes = function () {
    function ListaNegociacoes(armadilha) {
        _classCallCheck(this, ListaNegociacoes);

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    //Adc negociacao em nosso array


    _createClass(ListaNegociacoes, [{
        key: "adiciona",
        value: function adiciona(negociacao) {
            this._negociacoes.push(negociacao);
        }
    }, {
        key: "esvazia",
        value: function esvazia() {
            this._negociacoes = [];
        }

        //Getter's

    }, {
        key: "negociacoes",
        get: function get() {
            //Vamos usar programção defensica para blindarmos nossas negociacoes, para que ninguem consiga fazer nem 'length =0' ou 'push()'
            //Criamos um array vazio e chamamos o método 'concat' que retorna um novo objeto, como se fosse uma cópia, porém retornamos a lista que o cara quer usando concat
            //Retornamos somente uma cópia pro client, o veradeiro permanece intacto
            return [].concat(this._negociacoes);
        }
    }]);

    return ListaNegociacoes;
}();
//# sourceMappingURL=ListaNegociacoes.js.map