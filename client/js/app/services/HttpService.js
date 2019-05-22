'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Então, quais são os ESTADOS possíveis de um requisição AJAX?
    0: requisição ainda não iniciada
    1: conexão com o servidor estabelecida
    2: requisição recebida
    3: processando requisição
    4: requisição está concluída e a resposta está pronta
*/
var HttpService = function () {
    function HttpService() {
        _classCallCheck(this, HttpService);
    }

    _createClass(HttpService, [{
        key: '_handleErrors',


        //Se minha resposta não for OK eu lanço erro, caso contrário eu retorno ela mesmo para seguir a requisição normalemente
        value: function _handleErrors(res) {
            if (!res.ok) throw new Error(res.statusText);
            return res;
        }

        //AJAX COM 'Fetch API'
        //Fetch API aceita Promise, portanto uso o 'then' para chamar o método para enviar minha 'res' que tem uma propriedade '.ok' dizendo seu status
        //res.json -> Digo qual meu retorno da requisição, no formato JSON, já faz todo parse necessario

    }, {
        key: 'get',
        value: function get(url) {
            var _this = this;

            return fetch(url).then(function (res) {
                return _this._handleErrors(res);
            }).then(function (res) {
                return res.json();
            });
        }
    }, {
        key: 'post',
        value: function post(url, dado) {
            var _this2 = this;

            return fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                body: JSON.stringify(dado)
            }).then(function (res) {
                return _this2._handleErrors(res);
            });
        }
    }]);

    return HttpService;
}();
//# sourceMappingURL=HttpService.js.map