/*
Então, quais são os ESTADOS possíveis de um requisição AJAX?
    0: requisição ainda não iniciada
    1: conexão com o servidor estabelecida
    2: requisição recebida
    3: processando requisição
    4: requisição está concluída e a resposta está pronta
*/
class HttpService {

    //Se minha resposta não for OK eu lanço erro, caso contrário eu retorno ela mesmo para seguir a requisição normalemente
    _handleErrors(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }

    //AJAX COM 'Fetch API'
    //Fetch API aceita Promise, portanto uso o 'then' para chamar o método para enviar minha 'res' que tem uma propriedade '.ok' dizendo seu status
    //res.json -> Digo qual meu retorno da requisição, no formato JSON, já faz todo parse necessario
    get(url) {
        return fetch(url)
            .then(res => this._handleErrors(res))
            .then(res => res.json());
    }


    post(url, dado) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });
    }


}