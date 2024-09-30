var area = document.getElementById("area");


function objetos()
{
    let pessoa = {
        nome: 'João',
        idade: 25,
        cargo:'Jornalista'
    }
    
    let dadosPessoa = {
        ...pessoa,
        status: 'Ativo',
        cidade: 'Campo Largo',
        toString: function () {
            return `<br> nome: ${this.nome},<br> idade: ${this.idade},<br> cargo: ${this.cargo},
            <br> status: ${this.status},<br> cidade: ${this.cidade}`;
          },
        
    }
    area.innerHTML = " SpreadObjects " + dadosPessoa;
}

function arrays()
{
    let primeiros = ["João ",25," Jornalista"];
    let numeros = ["Ativo "," Campo Largo"];
    let resultado = [...primeiros, ...numeros];
    area.innerHTML = " SpreadArrays<br> " + resultado;
}



