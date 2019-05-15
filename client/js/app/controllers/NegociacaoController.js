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

        //Utilizo dessa forma para ser criado um Date corretamente do jeito q eu quero... Existem diversas formas
        // Os '...' significa que cada item do meu array é respectivo para cada parametro, param 1, 2 e 3.
        //Uso função 'map' para validar meu array, quando ele chegar no indice 1 que é referente ao mês ele fará o 'item -1' pois o Date ele vai de 0 até 11, então o mês 0 é janeiro.
        //Uso % -> Mod, pois qnd for 1 ele fará o retorno de 1 para subtrair... (0 % 2 = 0), (1 % 2 = 1), (2 % 2 = 0)
        let data = new Date(...this._inputData
            .value.split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            }));

            //Criando obj pelo Construtor dele, já passando os valores dos campos
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );


        console.log(negociacao.data);
        console.log(negociacao.quantidade);
        console.log(negociacao.valor);

    }


}
