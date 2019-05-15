//JavaScript -> Orientado a Objetos
//MUITO parecido com Java
class Negociacao{

    //Através do construtor estamos setando os atributos da class
    //this -> é referente a instancia da class
    //A convenção de '_' underline nos atributos significa que o programador NÃO deve modificar os dados
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }



    //Métodos de Acesso get/set
    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor(){
        return this._valor;
    }

    getVolume(){
        return this._quantidade * this._valor;
    }


}