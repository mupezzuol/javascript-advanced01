class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento; 
    }


    //Chama nosso template para atualizar na view
    update(){
        //innerHTML -> converte String em um Elemento do DOM, tags etc...
        this._elemento.innerHTML = this._template();//Retorna o template
    }

    //Usando Template String com -> ``
    _template(){
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
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
    }


}