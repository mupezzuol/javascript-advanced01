class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

    _template(model){
        //Se o texto tiver conteúdo o JavaScript retorna TRUE, então monta a tag com a class etc..
        //Se o texto for vazio ele retorna false, dessa forma cria tag sem nd, para não aparecer na VIEW
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

}