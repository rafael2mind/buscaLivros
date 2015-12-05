  function buscar(){
    palavra = document.getElementById("busca").value;

    $.getJSON('https://www.googleapis.com/books/v1/volumes?q='+palavra, function(data) {

                var lista = "";

                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];

                    var id = item.id.toString();
                    id = '"'+id+'"';

                    lista = lista + '<li>';
                    lista = lista + "<a href='' onclick='exibeLivro("+id+")' class='ui-icon-eye'>";
                    lista = lista + "<h1>"+item.volumeInfo.title+"</h1>";
                    lista = lista + "<p>"+item.volumeInfo.authors+"</p></a>";
                    lista = lista + "</li>";
                }
                
                $(lista).appendTo( "#livro" );
                $("#livro" ).trigger( "create" );
                location.href="#resultados";
 
    });

  }


    function mostraLivro(){

      livro = localStorage.getItem("livro");

    $.getJSON('https://www.googleapis.com/books/v1/volumes/'+livro, function(data) {

                    $('#capa').attr("src", data.volumeInfo.imageLinks.thumbnail );
                    document.getElementById("titulo").value = data.volumeInfo.title;
                    document.getElementById("autor").value = data.volumeInfo.authors;
                    document.getElementById("ano").value = data.volumeInfo.publishedDate;
                    document.getElementById("editora").value = data.volumeInfo.publisher;
                    document.getElementById("resenha").innerHTML = data.volumeInfo.description;
               
                location.href="#livro";
 
    });

  }