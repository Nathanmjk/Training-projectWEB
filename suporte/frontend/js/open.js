window.onload = function(){
    checkSession();
}


function checkSession(){
    $.ajax({
        dataType: "JSON",
        type: "GET",
        url: "../../backend/php/checkSession.php",
        success: function(retorno){
            if(retorno == "Not authenticaded" || retorno == "Not authorized"){
                
                window.location.href = "../pages/login.html";
            }
        }
    })
}

function back(){
    window.location.href = "../pages/opencall.html";
}

function exit(){
    $.ajax({
        dataType: "JSON",
        type: "GET",
        url: "../../backend/php/exit.php",
        success: function(retorno){ 
            if(retorno == "Success"){
                window.location.href = "../../index.html";
            }else{
                console.log("error");
            }
    }

})

}

function request(){
    const form = {
        name: $('#name').val(),
        sector: $('#sector').val(),
        category: $('#category').val(),
        file: $('#upload').val(),
        commentary: $('#commentary').val(),
        
      };
      send(form);
}

function send(parametro){
    
    $.ajax({
        dataType: "JSON",
        type: "POST",
        url: "../../backend/php/sendDB.php",
        data: parametro,
        success: function( retorno ) {
            if(retorno == "Success"){
                window.location.href = "../pages/opencall.html";
                $.ajax({
                    dataType: "JSON",
                    type: "POST",
                    url: "../../backend/php/email/alertEmail.php"
                    
                })
            }
        }
    })
}