"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bind =

//... -> aceita vários valores como parametro e ele irá encapsular dentro de um Array, é como se fosse um VARARGS em Java
function Bind(model, view) {
    _classCallCheck(this, Bind);

    for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
    }

    var proxy = ProxyFactory.create(model, props, function (model) {
        view.update(model);
    });

    view.update(model);
    return proxy;
};
//# sourceMappingURL=Bind.js.map