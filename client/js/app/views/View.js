class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    //Chama nosso template para atualizar na view
    update(model){
        //innerHTML -> converte String em um Elemento do DOM, tags etc...
        this._elemento.innerHTML = this._template(model);//Retorna o template
    }


}