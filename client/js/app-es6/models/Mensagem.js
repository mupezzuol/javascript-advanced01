class Mensagem{

    //No parametro atribuimos um valor padrão, caso ninguém passe nada para o contrutor ele adotara esse padrão
    //Se for passado parametro o valor padrão é ignorado
    constructor(texto=''){
        this._texto = texto;
    }

    //Getter's and Setter's
    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }

}