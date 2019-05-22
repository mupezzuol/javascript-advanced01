'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateHelper = function () {

    //Colocamos essa msg toda vez q alguém for instacia-la, pois usamos essa classe só para acessar os métodos estáticos
    //Nas chamadas em outras classes eu usarei desas forma -> DateHelper.MÉTODOOOO
    function DateHelper() {
        _classCallCheck(this, DateHelper);

        throw new Error('Essa classe não pode ser instanciada');
    }

    //Mascara da Data para exibição
    //Preciso somar pois temos aquele problema de o Mês ir de 0 até 11


    _createClass(DateHelper, null, [{
        key: 'dataParaTexto',
        value: function dataParaTexto(data) {
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear(); //-> repare que não é '' é ``
        }

        //Utilizo dessa forma para ser criado um Date corretamente do jeito q eu quero... Existem diversas formas
        // Os '...' significa que cada item do meu array é respectivo para cada parametro, param 1, 2 e 3.
        //Uso função 'map' para validar meu array, quando ele chegar no indice 1 que é referente ao mês ele fará o 'item -1' pois o Date ele vai de 0 até 11, então o mês 0 é janeiro.
        //Uso % -> Mod, pois qnd for 1 ele fará o retorno de 1 para subtrair... (0 % 2 = 0), (1 % 2 = 1), (2 % 2 = 0)
        //Arrow Function -> Função em Flecha.. menos verboso, não preciso de  {} para uma instrução, nem do 'return'

    }, {
        key: 'textoParaData',
        value: function textoParaData(texto) {

            //Valido o formado do texto, se NÃO for igual a REGEX abaixo ele apresenta erro
            //REGEX formato válido
            if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');

            return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split('-').map(function (item, indice) {
                return item - indice % 2;
            })))))();
        }
    }]);

    return DateHelper;
}();
//# sourceMappingURL=DateHelper.js.map