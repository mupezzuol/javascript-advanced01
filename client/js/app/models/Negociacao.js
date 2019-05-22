"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//JavaScript -> Orientado a Objetos
//MUITO parecido com Java
var Negociacao = function () {

    //Através do construtor estamos setando os atributos da class
    //this -> é referente a instancia da class
    //A convenção de '_' underline nos atributos significa que o programador NÃO deve modificar os dados, ou seja, dados PRIVATE
    function Negociacao(data, quantidade, valor) {
        _classCallCheck(this, Negociacao);

        //Não é congelado, pois o freeze não é profundo e não congela atributos dentro de outros Objetos, nesse caso Objeto Date
        this._data = new Date(data.getTime()); //Crio nova data a partir da data do parametro, para não alterarem dps.. Isso é chamado de -> 'programação defensiva'

        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Congelo essa a instancia criada, para que não seja possivel alterar nossos atributos.. this -> instancias criadas ao decorrer do programa
    }

    //Getter's no padrão JavaScript
    //Posso chamar direto -> obj.quantidade (por debaixo dos panos ele chama dessa forma, fica menos verboso)


    _createClass(Negociacao, [{
        key: "data",
        get: function get() {
            return new Date(this._data.getTime()); //Crio uma nova data baseado na data da Classe -> funciona como uma copy -> modo de segurança -> é chamado de 'programação defensiva'
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }, {
        key: "volume",
        get: function get() {
            return this._quantidade * this._valor;
        }
    }]);

    return Negociacao;
}();
//# sourceMappingURL=Negociacao.js.map