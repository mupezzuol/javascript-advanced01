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

        //Chamando Proxy -> eu passo meu model, o meu contexto e os métodos q eu vou observar para que quando forem acionados eu chamao o update
        //já chamo nossa View etc... chamando métodos isolados para nos auxiliar nisso
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia')

        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView($('#mensagemView')),
            'texto');
    }

    
    //Método de ADC
    adiciona(event){
        event.preventDefault();//Não recarrega a página após o submit

        //Criando uma Negociação e Adicionando a negociacao em uma lista de negociacoes
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        //Mensagem para o usuário
        this._mensagem.texto = 'Negociação adicionada com sucesso!';//Chama método SET

        //Limpa formulário
        this._limpaFormulario();
    }


    //AJAX puro, sem JQuery
    importaNegociacoes(){
        let xhr = new XMLHttpRequest();

        //Preparo requisição AJAX, qual operação eu quero fazer
        //Method -> GET
        //URL -> Local, por isso está simplificada
        xhr.open('GET', 'negociacoes/semana');

        //Antes de enviar minha requisição, devemos fazer pequenas configurações
        //Toda vez que o ESTADO da minha requisição MUDAR eu vou executar essa ARROE FUNCTION
        /*
        Então, quais são os ESTADOS possíveis de um requisição AJAX?
            0: requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição está concluída e a resposta está pronta
        */
        xhr.onreadystatechange = () => {
            //Estado 4 -> OK
            if(xhr.readyState == 4){
                //Status da requisição 200 -> OK, diferente do ESTADO da requisição AJAX
                if(xhr.status == 200){
                    //JSON.parse -> Converte meu retorno String/Text em uma Objeto JavaScript(JSON)
                    //Faço um MAP, para cada Objeto retornado ele irá criar uma nova instancia de 'Negociacao' e no final ele retorna um ARRAY com essas instancias
                    //Faço um forEach, para percorrer meu array de instancia, para cada item(negociacao) eu adiciono um novo item(cria, adc, coloca na table etc...)
                    //Ficar esperto nos retornos, Datas etc....
                    JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                        this._mensagem.texto = 'Negociações semanais importadas com sucesso!';
                }else{
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações da semana';//Usa método SET e atualiza nossa VIEW pelo escutador já implementado
                }
            }
        };

        //Efetivar minha requisição
        xhr.send();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }


    //Cria uma Negociação
    _criaNegociacao(){
        //Criando obj pelo Construtor dele, já passando os valores dos campos
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    //Só a classe pode chamar o método, por isso foi usado a convenção '_'
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }


}
