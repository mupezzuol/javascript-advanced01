//Minha Controller
class NegociacaoController{

    constructor() {
        //Usando padrão utilizado no JQuery para facilitar busca
        //Usando bind para que o this da classe do seletor permaneca na instancia do objeto 'document', para que possamos usar através da nossa variacel '$'
        let $ = document.querySelector.bind(document);

        //Crio atributos com os valores do inputs para que o meu DOM seja percorrido uma vez, questão de performace
        this.inputData = $('#data');
        this.inputQuantidade =  $('#quantidade');
        this.inputValor = $('#valor');
}


    //Método de ADC
    adiciona(event){
        event.preventDefault();//Não recarrega a página após o submit
        
        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);

    }


}