class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento; 
    }


    //Chama nosso template para atualizar na view
    update(model){
        //innerHTML -> converte String em um Elemento do DOM, tags etc...
        this._elemento.innerHTML = this._template(model);//Retorna o template
    }


    //Usando Template String com -> ``
    //Usamos Arrow Function com MAP para percorrermos nosso model que é nossa lista de negociacoes
    //para cada elemento da lista nós criamos uma TR, no final retorno uma STRING para nosso template para ele renderizar tudo
    //porém temos q juntar todos os TR em uma String só, para isso usamos o 'join()' que retorna tudo em uma string gigante unica, assim retorna todas as TR já
    //Para o TOTAL usamos o IIFE -> Criamos uma função e chamamos ela ao mesmo tempo, auto-chamada, para podermos colocar mais codigos, trab com var etc..
    _template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n => `

                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>

                    `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
                </tfoot>
            </table>
        `;
    }


    /*
    FORMAS DE CALCULAR O TOTAL:

-> Reduce -> Faz o processo de reduzir e retorna somente 1 único valor, usando arrow function é feito o calculo...
-> Reduce -> Recebe primeiro paramentro 'arrow function' e o segundo o valor que será inicializado no primeiro parametro da function chamada


-> Usando REDUCE + ARROW FUNCTION REDUZIDA
- > (total,n) -> é uma arrow function, 'total' é o valor para ser usado pra soma e o 'n' é a var que representa o item da lista
${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}



-> Usando IIFE + Arrow Function

    ${
        (function(){
            let total = 0.0;
            model.negociacoes.forEach(n => total += n.volume);
            return total;
        )()
    }



-> Usando Arrow Function + Reduce
${model.negociacoes.reduce(function(total, n) {
               return total + n.volume;
         }, 0.0)
        }
    
    
    */

}