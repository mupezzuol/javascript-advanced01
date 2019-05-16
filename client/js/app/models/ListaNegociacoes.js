class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }

    //Adc negociacao em nosso array
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }


    //Getter's
    get negociacoes(){
        return this._negociacoes;
    }

}