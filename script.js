function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if(login == "admin" && senha == "admin"){
     location.href = "sobre.html";
    }else{
     alert('usuario ou senha incorretos');
    }
 }

 function cadastro(){
    location.href="cadastro.html";
 }

 function cadastrar(){
   var usuario = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   var confirmarSenha = document.getElementById('confirmar-senha').value;
   if (senha != confirmarSenha){
      alert('as senhas não são iguais');
   }else{
      alert('cadastrado com sucesso');
   }

}
