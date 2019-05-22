//Minha Controller
class NegociacaoController {

    constructor() {
        //Usando padrão utilizado no JQuery para facilitar busca
        //Usando bind para que o this da classe do seletor permaneca na instancia do objeto 'document', para que possamos usar através da nossa variacel '$'
        let $ = document.querySelector.bind(document);

        //Crio atributos com os valores do inputs para que o meu DOM seja percorrido uma vez, questão de performace
        this._inputData = $('#data');//Retorna String no formato (aaaa-MM-dd), não Date()
        this._inputQuantidade = $('#quantidade');
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

        this._service = new NegociacaoService();
        this._init();
    }

    _init() {
        this._service
            .lista()
            .then(negociacoes =>
                negociacoes.forEach(negociacao =>
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(erro => this._mensagem.texto = erro);

        setInterval(() => {
            this.importaNegociacoes();
        }, 3000);
    }


    //Método de ADC
    adiciona(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();
        new NegociacaoService()
            .cadastra(negociacao)
            .then(mensagem => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = mensagem;
                this._limpaFormulario();
            }).catch(erro => this._mensagem.texto = erro);
    }

    //AJAX puro, sem JQuery
    importaNegociacoes() {
        this._service
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'
            }))
            .catch(erro => this._mensagem.texto = erro);
    }

    apaga() {
        this._service
            .apaga()
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();
            })
            .catch(erro => this._mensagem.texto = erro);
    }


    //Cria uma Negociação
    _criaNegociacao() {
        //Criando obj pelo Construtor dele, já passando os valores dos campos
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));
    }

    //Só a classe pode chamar o método, por isso foi usado a convenção '_'
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }

}
