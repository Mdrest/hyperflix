function logar() {

    var nome = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var erro1 = document.getElementById('erro-de-login');

    if (nome == "mdrest" && senha == "matheus15" || nome == "admin" && senha == "admin") {

        location.href = "";
    } else {
        erro1.innerHTML = ('senha ou nome estao incorretos :(')
      
     setTimeout(()=>{ erro1.innerHTML = ('')
        
     }, 3500);
    }

 

}
