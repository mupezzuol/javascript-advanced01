var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
console.log(campos);//Array com os TD do form

//Pegamos nossa table
var tbody = document.querySelector('table tbody');

//Submit do formulário
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    //Crio a TR já preenchendo todas as TD dos campos do formulário
    var tr = criaTrComTdDoForm(campos);

    //Crio TD de Volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    //Finalizo minha TR e adiciono em nossa tbody
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    //Limpando os campos com valores defaults + focus em nosso campo de  data
    campos[0].focus();
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
});


//Criando TD através dos campos do Formulário
function criaTrComTdDoForm(campos){
    var tr = document.createElement('tr');

    //Para cada item do Array eu crio uma nova TD
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);//Coloco dentro da minha TR
    });
    return tr;
}
