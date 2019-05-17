class ListaNegociacoes{

    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    //Adc negociacao em nosso array
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    esvazia()   {
        this._negociacoes = [];
    }

    //Getter's
    get negociacoes(){
        //Vamos usar programção defensica para blindarmos nossas negociacoes, para que ninguem consiga fazer nem 'length =0' ou 'push()'
        //Criamos um array vazio e chamamos o método 'concat' que retorna um novo objeto, como se fosse uma cópia, porém retornamos a lista que o cara quer usando concat
        //Retornamos somente uma cópia pro client, o veradeiro permanece intacto
        return [].concat(this._negociacoes);
    }

}