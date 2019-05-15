//Minha Controller
class NegociacaoController{

    constructor() {
        //Usando padrão utilizado no JQuery para facilitar busca
        //Usando bind para que o this da classe do seletor permaneca na instancia do objeto 'document', para que possamos usar através da nossa variacel '$'
        let $ = document.querySelector.bind(document);

        //Crio atributos com os valores do inputs para que o meu DOM seja percorrido uma vez, questão de performace
        this._inputData = $('#data');//Retorna String no formato (aaaa-MM-dd), não Date()
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
}


    //Método de ADC
    adiciona(event){
        event.preventDefault();//Não recarrega a página após o submit
        
        console.log(typeof this._inputData.value);


        //Criando obj pelo Construtor dele, já passando os valores dos campos
        let negociacao = new Negociacao(
            //Utilizo dessa forma para ser criado um Date corretamente do jeito q eu quero... Existem diversas formas
            new Date(this._inputData.value.split('-')),//Faço split para quebrar meu Ano, Mês e Dia como um Array, onde a classe Date recebe e cria normalmente
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao.data);
        console.log(negociacao.quantidade);
        console.log(negociacao.valor);

    }


}
