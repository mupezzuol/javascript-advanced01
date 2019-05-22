"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Todos os métodos da classe VIEW são herdados para nossa classe
var MensagemView = function (_View) {
    _inherits(MensagemView, _View);

    //Toda herança em JS qnd vc tem parametro no seu construtor você deve passa-lo para o PAI também
    function MensagemView(elemento) {
        _classCallCheck(this, MensagemView);

        return _possibleConstructorReturn(this, (MensagemView.__proto__ || Object.getPrototypeOf(MensagemView)).call(this, elemento)); //Chama construtor da classe Pai (View.js) passando o elemento recebido
    }

    //Sobrescrevo o método da classe PAI com a implementação diferente


    _createClass(MensagemView, [{
        key: "template",
        value: function template(model) {
            //Se o texto tiver conteúdo o JavaScript retorna TRUE, então monta a tag com a class etc..
            //Se o texto for vazio ele retorna false, dessa forma cria tag sem nd, para não aparecer na VIEW
            return model.texto ? "<p class=\"alert alert-info\">" + model.texto + "</p>" : "<p></p>";
        }
    }]);

    return MensagemView;
}(View);
//# sourceMappingURL=MensagemView.js.map