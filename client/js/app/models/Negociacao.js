//JavaScript -> Orientado a Objetos
//MUITO parecido com Java
class Negociacao{

    //Através do construtor estamos setando os atributos da class
    //this -> é referente a instancia da class
    //A convenção de '_' underline nos atributos significa que o programador NÃO deve modificar os dados, ou seja, dados PRIVATE
    constructor(data, quantidade, valor){
        //Não é congelado, pois o freeze não é profundo e não congela atributos dentro de outros Objetos, nesse caso Objeto Date
        this._data = new Date(data.getTime());//Crio nova data a partir da data do parametro, para não alterarem dps.. Isso é chamado de -> 'programação defensiva'

        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//Congelo essa a instancia criada, para que não seja possivel alterar nossos atributos.. this -> instancias criadas ao decorrer do programa
    }

    //Getter's no padrão JavaScript
    //Posso chamar direto -> obj.quantidade (por debaixo dos panos ele chama dessa forma, fica menos verboso)
    get data(){
        return new Date(this._data.getTime());//Crio uma nova data baseado na data da Classe -> funciona como uma copy -> modo de segurança -> é chamado de 'programação defensiva'
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