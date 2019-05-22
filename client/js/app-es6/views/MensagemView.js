//Todos os métodos da classe VIEW são herdados para nossa classe
class MensagemView extends View{

    //Toda herança em JS qnd vc tem parametro no seu construtor você deve passa-lo para o PAI também
    constructor(elemento){
        super(elemento);//Chama construtor da classe Pai (View.js) passando o elemento recebido
    }

    //Sobrescrevo o método da classe PAI com a implementação diferente
    template(model){
        //Se o texto tiver conteúdo o JavaScript retorna TRUE, então monta a tag com a class etc..
        //Se o texto for vazio ele retorna false, dessa forma cria tag sem nd, para não aparecer na VIEW
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

}