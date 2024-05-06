/* 
    Aluno:  Lucas Pereira Franco de Almeida
    nUSP:   12675020
 */

//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var senhaMeter = document.querySelector("#passStrengthMeter");
var senhaMeterMensagem = document.querySelector("#inputResult");



/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener("focusout", validarNome);
email.addEventListener("focusout", validarEmail);
senha.addEventListener("focusout", validarSenha);

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/

function validarNome(e){ 
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^[A-Za-z]{7,}$/;
    
    console.log(e); //impressão em console do objeto evento e
    console.log(e.target.value); //impressão em console do valor do objeto 'nome' que originou o evento   

    if(e.target.value.trim().match(regexNome)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }       
}

function validarEmail(e){

    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(br|com|net|org)$/;

    if(e.target.value.trim().match(regexEmail)==null){

        emailHelp.textContent = "Formato de email inválido";
        emailHelp.style.color = "red";
    }
    else{

        emailHelp.textContent = "";
    }
}

function validarSenha(e){

    const stringSenha = e.target.value;
    const regexSenha = /^(?=.*[@#%&!+])(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
    const regexForte = /^(?=(.*[@#%&!+]){2,})(?=(.*[0-9]){2,})(?=(.*[A-Z]){2,}).{12,}$/;
    const regexModerada = /^(?=.*[@#%&!+])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    const regexFraca = /^(?=.*[@#%&!+])(?=.*[0-9]).{1,7}$/;
    

    console.log(e.target.value);
    if(stringSenha.includes(nome.value) === true || stringSenha.includes(ano.value) === true || stringSenha.trim().match(regexSenha)==null){
        
        senhaHelp.textContent = "Formato de senha inválido";
        senhaHelp.style.color = "red";
        senhaMeter.value = 0;
        senhaMeterMensagem.textContent = ""
    }
    else{
        if(stringSenha.trim().match(regexForte)){

            senhaMeter.value = 30;
            senhaMeterMensagem.textContent = "Senha forte!"
        }
        else if(stringSenha.trim().match(regexModerada)){

            senhaMeter.value = 20;
            senhaMeterMensagem.textContent = "Senha moderada."
        }
        else{

            senhaMeter.value = 10;
            senhaMeterMensagem.textContent = "Senha fraca, considere escolher outra."
        }
        console.log(e.target.value);
        senhaHelp.textContent = "";
    }


}

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener("focusout", () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > parseInt(date.getFullYear()) ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()}.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < parseInt(date.getFullYear())-120 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${date.getFullYear()-120}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
}
);

