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
    }


    //Método de ADC
    adiciona(event) {
        event.preventDefault();//Não recarrega a página após o submit

        //Criando uma Negociação e Adicionando a negociacao em uma lista de negociacoes
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        //Mensagem para o usuário
        this._mensagem.texto = 'Negociação adicionada com sucesso!';//Chama método SET

        //Limpa formulário
        this._limpaFormulario();
    }


    //AJAX puro, sem JQuery
    importaNegociacoes() {
        let service = new NegociacaoService();

        service.obterNegociacoesDaSemana()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaRetrasada()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);
    }




    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }


    //Cria uma Negociação
    _criaNegociacao() {
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
