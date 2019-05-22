//Padrão -> Module Pattern
var ConnectionFactory = (function () {

    //Vars de conexão, ngm acessa, pois a função anoniam retorna somente a classe
    const stores = ['negociacoes'];
    const version = 1;
    const dbName = 'jsavancado';

    var connection = null;
    var close = null;

    return class ConnectionFactory {
        //Faço com que não seja possivel instanciar essa classe
        constructor() {
            throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }


        static getConnection() {

            return new Promise((resolve, reject) => {

                let openRequest = window.indexedDB.open(dbName, version);
                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {

                    //Se não tiver conexão
                    if(!connection) {
                        connection = e.target.result;
                        close = connection.close;
                        connection.close = function() {
                              throw new Error('Você não pode fechar diretamente a conexão');
                        };
                    }

                    resolve(e.target.result);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };
            });
        }


        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store);
                }
                connection.createObjectStore(store, { autoIncrement: true });
            });
        }


        static closeConnection() {
            if(connection) {
                Reflect.apply(close, connection, [])
                connection = null;
            }
        }


    }
})();
