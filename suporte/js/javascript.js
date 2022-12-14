var array_products = [['acer.webp', 'Notbook Acer', 'R$2400,00'  ,false, 0],
 ['hp.webp', 'Notbook HP', 'R$2000,00'  ,false, 1],
['pc.jpg', 'PC Gamer', 'R$5000,00' ,false, 2]];

var carrinho = "";

window.onload = function(){
    montaCards();
}

function montaCards(){
    document.getElementById("cards-area").innerHTML = "";

    for(var i=0; i< array_products.length; i++)
    {
        var conteudo = "";

        conteudo += '<div class="card" >';
        conteudo += '<div class="card-img">';
        conteudo += '<img class="img"  src="img/' + array_products[i][0] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="card-nome">' + array_products[i][1] + '</div>';
        conteudo += '<div class="card-price">' + array_products[i][2] + '</div>';
        conteudo += '</div>';
        




        document.getElementById("cards-area").innerHTML += conteudo;


    }

}

function verify(){
    $.ajax({
        dataType: "JSON",
        type: "POST",
        url: "backend/php/verify.php",
        success: function(retorno){
            if(retorno == "loggin"){
                window.location.href = "frontend/pages/login.html"
            } else if(retorno == "already logged in"){
                window.location.href = "frontend/pages/opencall.html"
            }else{
                console.log("nao deu");
            }
        }

    })
}




    