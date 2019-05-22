'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Todos os métodos da classe VIEW são herdados para nossa classe
var NegociacoesView = function (_View) {
    _inherits(NegociacoesView, _View);

    //Toda herança em JS qnd vc tem parametro no seu construtor você deve passa-lo para o PAI também
    function NegociacoesView(elemento) {
        _classCallCheck(this, NegociacoesView);

        return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento)); //Chama construtor da classe Pai (View.js) passando o elemento recebido
    }

    //Sobrescrevo o método da classe PAI com a implementação diferente
    //Usando Template String com -> ``
    //Usamos Arrow Function com MAP para percorrermos nosso model que é nossa lista de negociacoes
    //para cada elemento da lista nós criamos uma TR, no final retorno uma STRING para nosso template para ele renderizar tudo
    //porém temos q juntar todos os TR em uma String só, para isso usamos o 'join()' que retorna tudo em uma string gigante unica, assim retorna todas as TR já
    //Para o TOTAL usamos o IIFE -> Criamos uma função e chamamos ela ao mesmo tempo, auto-chamada, para podermos colocar mais codigos, trab com var etc..


    _createClass(NegociacoesView, [{
        key: 'template',
        value: function template(model) {
            return '\n            <table class="table table-hover table-bordered">\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                        <th>VOLUME</th>\n                    </tr>\n                </thead>\n                \n                <tbody>\n                    ' + model.negociacoes.map(function (n) {
                return '\n\n                        <tr>\n                            <td>' + DateHelper.dataParaTexto(n.data) + '</td>\n                            <td>' + n.quantidade + '</td>\n                            <td>' + n.valor + '</td>\n                            <td>' + n.volume + '</td>\n                        </tr>\n\n                    ';
            }).join('') + '\n                </tbody>\n                \n                <tfoot>\n                    <td colspan="3"></td>\n                    <td>' + model.negociacoes.reduce(function (total, n) {
                return total + n.volume;
            }, 0.0) + '</td>\n                </tfoot>\n            </table>\n        ';
        }

        /*
        FORMAS DE CALCULAR O TOTAL:
        -> Reduce -> Faz o processo de reduzir e retorna somente 1 único valor, usando arrow function é feito o calculo...
        -> Reduce -> Recebe primeiro paramentro 'arrow function' e o segundo o valor que será inicializado no primeiro parametro da function chamada
        -> Usando REDUCE + ARROW FUNCTION REDUZIDA
        - > (total,n) -> é uma arrow function, 'total' é o valor para ser usado pra soma e o 'n' é a var que representa o item da lista
        ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
        -> Usando IIFE + Arrow Function
         ${
            (function(){
                let total = 0.0;
                model.negociacoes.forEach(n => total += n.volume);
                return total;
            )()
        }
        -> Usando Arrow Function + Reduce
        ${model.negociacoes.reduce(function(total, n) {
                   return total + n.volume;
             }, 0.0)
            }
        
        
        */

    }]);

    return NegociacoesView;
}(View);
//# sourceMappingURL=NegociacoesView.js.map