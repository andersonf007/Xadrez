
    var toggle = true;
    $(function(){

          mostrarGuia();
          montaGrid();
          $('.drag').draggable({revert:'invalid'},{scope:'cacete'});
          $('.tab').droppable({scope:'cacete'},{revert:'fit'},{accept: '.drag'});
          $('.tab').droppable({ drop: function( event, ui ) { 

            alert('Olá Você está em -> '+$(this).attr('id'));
        

            }
          });
    });


    function montaGrid(){
      var qntCasas = 70;
      var id_auto = 1;
      var controle = 0;
      var cor =  0;
      var a = new Array('A','B','C','D','E','F','G','H');
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
            var elemento = $('#tabuleiro').append("<div id="+a[controle]+id_auto+" class='tab' style='width:80px; height:80px; float:left; background-color:white; border: 1px solid black;'><p>"+a[controle]+id_auto+"</p></div>");
            id_auto ++;      
            cor = 1;
          }else{
            var elemento = $('#tabuleiro').append("<div id="+a[controle]+id_auto+" class='tab' style='width:80px; height:80px; float:left; background-color:black; border: 1px solid black;'><p>"+a[controle]+id_auto+"</p></div>");
            id_auto ++;
            cor = 0;
          }
        }
      }
    }

    function mostrarGuia(){
      $('button').click(function(event) {
        if(toggle == true){
          toggle  = false;
        } else {
          toggle = true;
        }

        if(toggle == true){
            $('p').show();
            $('button').html('Esconder Guias');
        } else {
          $('p').hide();
            $('button').html('Mostrar Guias');
            
        }

        
      });

    }



