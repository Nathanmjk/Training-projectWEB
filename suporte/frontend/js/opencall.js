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


function acess(){
    window.location.href = "../pages/open.html";
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

function ID(){
    $.ajax({
        dataType: "JSON",
        type: "GET",
        url: "../../backend/php/getID.php"
        
    })
}


array_table = [ID(), Type(), commentary(), situation(), Cancel()];

function viewTable(){
    document.getElementById("viewTable").innerHTML = "";
    for(var i=0; i< array_table.length; i++){
        var view = "";
        view += '<table class="table">';
        view += '<tr class="line">';
        view += '<td> ID</td>';
        view += '<td> tipo </td>';
        view += '<td> comentario</td>';
        view += '<td> situação</td>';
        view += '<td> Cancelar</td>';
        view += '</tr>';
        view += '<tr class="line">';
        view += '<td><a class="ID" href=""> 01</a></td>';
        view += '<td>Impressora</td>';
        view += '<td> Analiseasdsa adsa</td>';
        view += '<td> Em andamento</td>';
        view += '<td> X</td>';
        view += '</tr>';
        view += '</table>';
    }




}
