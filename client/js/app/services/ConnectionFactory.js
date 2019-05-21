//Vars de conexão
var stores = ['negociacoes'];
var version = 2;
var dbName = 'jsavancado';

class ConnectionFactory {

    //Faço com que não seja possivel instanciar essa classe
    constructor() {
        throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }


    static getConnection() {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
            };

            openRequest.onsuccess = e => {
            };

            openRequest.onerror = e => {
            };
        });
    }


}
