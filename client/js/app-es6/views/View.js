class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    //Chama nosso template para atualizar na view
    update(model){
        //innerHTML -> converte String em um Elemento do DOM, tags etc...
        this._elemento.innerHTML = this.template(model);//Retorna o template
    }

    //Ao ser usado nas filhas ele é SOBRESCRITO, igual Java
    template(){
        throw new Error('O método template deve ser implementado');
    }


}