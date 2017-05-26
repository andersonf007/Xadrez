/*$(document).ready(function(){
   teste();
    
}); */
function Peca(){
    var id;
    var nome;
    var local;
    this.getId = function(){
        return id;
    };
    this.getNome = function(){
        return nome;
    };
    this.getLocal = function () {
        return local;
    };
    this.setId = function(cd) {
        id = cd;
    };
    this.setNome = function(n){
        nome = n;
    };
    this.setLocal = function(lc){
        local = lc;
    };
}

