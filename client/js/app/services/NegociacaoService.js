class NegociacaoService{


    //AJAX puro, sem JQuery
    //cb -> CallBack
    obterNegociacoesDaSemana(cb){
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
            if(xhr.readyState == 4) {
                //Status da requisição 200 -> OK, diferente do ESTADO da requisição AJAX
                if(xhr.status == 200) {
                    //JSON.parse -> Converte meu retorno String/Text em uma Objeto JavaScript(JSON)
                    //Faço um MAP, para cada Objeto retornado ele irá criar uma nova instancia de 'Negociacao' e no final ele retorna um ARRAY com essas instancias
                    //Ficar esperto nos retornos, Datas etc....
                    //CB -> Recebe primeiro parametro que é de erro como Null pois deu certo a requisicao, segundo paramentro ele retorna a lista em formato Array
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações da semana', null);//Retorno primeiro parametro a mensagem de Erro, e a negociacoes Null
                }  
            }
        }

        //Efetivar minha requisição
        xhr.send();
    }




}