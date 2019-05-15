//JavaScript -> Orientado a Objetos
//MUITO parecido com Java
class Negociacao{

    //Através do construtor estamos setando os atributos da class
    //this -> é referente a instancia da class
    constructor(data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    //Método
    obterVolumer(){
        return this.quantidade * this.valor;
    }


}