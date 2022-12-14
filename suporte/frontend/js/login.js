

function back(){
    window.location.href = "../../index.html";
}

function validate(){
    var hash = CryptoJS.SHA256($('#password').val());
    $('#passwordHash').val(hash);
    const form = {
        email: $('#email').val(),
        Hash: $('#passwordHash').val()
    }
   
    $.ajax({
        dataType: "Json",
        type: "POST",
        url: "../../backend/php/login.php",
        data: form,
        success: function(retorno){
            if(retorno == "Success"){
                window.location.href="../pages/opencall.html"
            }else if(retorno == "Login Ou senha incorreto"){
                document.getElementById("subtitle").innerHTML = '<div class="subtitle" id="subtitle"> Email ou senha invalidos!</div>';
                document.getElementById("email").style.borderColor = "red";
                document.getElementById("password").style.borderColor = "red";

            }else{
                    if(document.getElementById("email").value.length < 1 ){
                        document.getElementById("subtitle").innerHTML = '<div class="subtitle" id="subtitle"> Insira seu E-mail!</div>';
                    }else if(document.getElementById("password").value.length < 1){
                        document.getElementById("subtitle").innerHTML = '<div class="subtitle" id="subtitle"> Insira sua senha!</div>';
                        document.getElementById("password").style.borderColor = "red";
                    }else{
                        document.getElementById("subtitle").innerHTML = '<div class="subtitle" id="subtitle"> Email ou senha invalidos!</div>';
                        document.getElementById("email").style.borderColor = "red";
                    }
        

              
            }
        }
    });
}