/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//$(document).ready(function(){
    $(function(){
          $('.drag').draggable({revert:'invalid'},{scope:"cacete"});
             $('#a3').droppable({scope:'cacete'},{revert:'fit'});
          
          montaGrid();
    });
//});

function montaGrid(){
    var qntCasas = 70;
    var id_auto = 1;
    var controle = 0;
    var cor =  0;
    var a = new Array('a','b','c','d','e','f','g','h');
for(var i = 0; i <= qntCasas; i++){
    
      if(id_auto == 9){
          id_auto = 1;
          controle ++;
          a[controle];
          if(cor == 0){
              cor = 1;
          }else {
              cor = 0;
          }
      }else{
          if(cor == 0){
                  var elemento = $('#tabuleiro').append("<div id="+a[controle]+id_auto+" class='tab' style='width:80px; height:80px; float:left; background-color:white; border: 1px solid black;'></div>");
                  id_auto ++;      
                cor = 1;
          }else{
                var elemento = $('#tabuleiro').append("<div id="+a[controle]+id_auto+" class='tab' style='width:80px; height:80px; float:left; background-color:black; border: 1px solid white;'></div>");
                 id_auto ++;
                 cor = 0;
             }
        }
  }
}



