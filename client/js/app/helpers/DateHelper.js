class DateHelper{

    //Colocamos essa msg toda vez q alguém for instacia-la, pois usamos essa classe só para acessar os métodos estáticos
    //Nas chamadas em outras classes eu usarei desas forma -> DateHelper.MÉTODOOOO
    constructor(){
        throw new Error('Essa classe não pode ser instanciada');
    }



    //Mascara da Data para exibição
    //Preciso somar pois temos aquele problema de o Mês ir de 0 até 11
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;//-> repare que não é '' é ``
    }
    

    
    //Utilizo dessa forma para ser criado um Date corretamente do jeito q eu quero... Existem diversas formas
    // Os '...' significa que cada item do meu array é respectivo para cada parametro, param 1, 2 e 3.
    //Uso função 'map' para validar meu array, quando ele chegar no indice 1 que é referente ao mês ele fará o 'item -1' pois o Date ele vai de 0 até 11, então o mês 0 é janeiro.
    //Uso % -> Mod, pois qnd for 1 ele fará o retorno de 1 para subtrair... (0 % 2 = 0), (1 % 2 = 1), (2 % 2 = 0)
    //Arrow Function -> Função em Flecha.. menos verboso, não preciso de  {} para uma instrução, nem do 'return'
    static textoParaData(texto){

        //Valido o formado do texto, se NÃO for igual a REGEX abaixo ele apresenta erro
        //REGEX formato válido
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');


        return new Date(...texto
                .split('-')
                .map((item, indice) => item - indice % 2)
            );
    }

}