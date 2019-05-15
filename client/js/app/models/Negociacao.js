//JavaScript -> Orientado a Objetos
//MUITO parecido com Java
class Negociacao{

    //Através do construtor estamos setando os atributos da class
    //this -> é referente a instancia da class
    //A convenção de '_' underline nos atributos significa que o programador NÃO deve modificar os dados, ou seja, dados PRIVATE
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//Congelo essa a instancia criada, para que não seja possivel alterar nossos atributos.. this -> instancias criadas ao decorrer do programa
    }



    //Getter's no padrão JavaScript
    //Posso chamar direto -> obj.quantidade (por debaixo dos panos ele chama dessa forma, fica menos verboso)
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }


}