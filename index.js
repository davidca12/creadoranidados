window.onload=function(){

    function anidados {

        var pronoun = ['the','our','his'];
        var adj = ['great', 'big','small' ];
        var noun = ['jogger','racoon','jua'];

        for ( i = 0; i < pronoun.length; i++) {
            for ( k = 0; k < adj.length; k++) {
                for ( j= 0; j < noun.length; j++) {
                    let total= pronoun[i]+adj[k]+noun[j]+".com";
                    console.log(total);

                    let lista = document.getElementById("prueba" ); /*SANGOOGLE:Reconoce el elemento html utilizado*/
                    let linew = document.createElement("li"); /*Crea otro elemento dentro del elemento contenedor*/
                    let contenido = document.createTextNode(total); //Imprime lo que hay en total en elemento li
                    lista.appendChild(linew);
                    linew.appendChild(contenido);
                }
                
            }
            
            
        }
    }