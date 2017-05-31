
    var tabuleiro = new Array(8);
    var rainhas = new Array(2);
    var reis = new Array(2);
    var bispos = new Array(4);
    var cavalos = new Array(4);
    var peoes_1 = new Array(8);
    var peoes_2 = new Array(8);
    var torres = new Array(4);

$(document).ready(function(){
       
        tabuleiro[1] = ['A1','B1','C1','D1','E1','F1','G1','H1'] ; 
        tabuleiro[2] = ['A2','B2','C2','D2','E2','F2','G2','H2'] ;
        tabuleiro[3] = ['A3','B3','C3','D3','E3','F3','G3','H3'] ;
        tabuleiro[4] = ['A4','B4','C4','D4','E4','F4','G4','H4'] ;
        tabuleiro[5] = ['A5','B5','C5','D5','E5','F5','G5','H5'] ;
        tabuleiro[6] = ['A6','B6','C6','D6','E6','F6','G6','H6'] ;
        tabuleiro[7] = ['A7','B7','C7','D7','E7','F7','G7','H7'] ;
        tabuleiro[8] = ['A8','B8','C8','D8','E8','F8','G8','H8'] ;
        
        
        
        //alert(tabuleiro[8].findIndex('C8'));
        //DEFININDO A CLASSE PEÇA
        var p = new Peca();
        p.setNome('NOme');
        //alert(p.getNome());
       
        colocarRainha();
        colocarRei();
        colocarBispo();
        colocarCavalos();
	colocarPeoes();
	colocarTorres();
        
        for(var i = 1; i <= 8;i++){
            console.log(peoes_2[i].getLocal());
        }
        
        
});

function colocarPeoes(){
	var index = new Array();
	index[1] = 'A';
	index[2] = 'B';
	index[3] = 'C';
	index[4] = 'D';
	index[5] = 'E';
	index[6] = 'F';
	index[7] = 'G';
	index[8] = 'H';
	for(var i = 1; i <= 8; i++){
		$('#peao_1_'+i).css({'top':$('#'+index[i]+'7').position().top, 'left': $('#'+index[i]+'7').position().left});
        var p = new Peca();
        p.setId('#peao_1_'+i);
        p.setNome('peao');
        p.setLocal('#'+index[i]+'7');
        peoes_1[i] = p;
	}
        for(var i = 1; i <= 8; i++){
		$('#peao_2_'+i).css({'top':$('#'+index[i]+'2').position().top, 'left': $('#'+index[i]+'2').position().left});
                var p = new Peca();
                p.setId('#peao_2_'+i);
                p.setNome('peao');
                p.setLocal('#'+index[i]+'2');
                peoes_2[i] = p;
                
	}


}

function colocarTorres(){
	$('#torre_1_1').css({'top':$('#A8').position().top, 'left': $('#A8').position().left});
            var t = new Peca();
            t.setId('#torre_1_1');
            t.setNome('torre');
            t.setLocal('#A8');
            torres[1] = t;
                
	$('#torre_1_2').css({'top':$('#H8').position().top, 'left': $('#H8').position().left});
            var t2 = new Peca();
            t2.setId('#torre_1_2');
            t2.setNome('torre');
            t2.setLocal('#H8');
            torres[2] = t2;
	$('#torre_2_1').css({'top':$('#H1').position().top, 'left': $('#H1').position().left});
            var t3 = new Peca();
            t3.setId('#torre_2_1');
            t3.setNome('torre');
            t3.setLocal('#H1');
            torres[3] = t3;
	$('#torre_2_2').css({'top':$('#A1').position().top, 'left': $('#A1').position().left});
            var t4 = new Peca();
            t4.setId('#torre_2_2');
            t4.setNome('torre');
            t4.setLocal('#A1');
            torres[4] = t4;
}

function colocarCavalos(){
	$('#cavalo_1_1').css({'top':$('#B8').position().top, 'left': $('#B8').position().left});
            var c = new Peca();
            c.setId('#cavalo_1_1');
            c.setNome('cavalo');
            c.setLocal('#B8');
            cavalos[1] = c;
	$('#cavalo_1_2').css({'top':$('#G8').position().top, 'left': $('#G8').position().left});
            var c2 = new Peca();
            c2.setId('#cavalo_1_2');
            c2.setNome('cavalo');
            c2.setLocal('#G8');
            cavalos[2] = c2;
	$('#cavalo_2_1').css({'top':$('#B1').position().top, 'left': $('#B1').position().left});
            var c3 = new Peca();
            c3.setId('#cavalo_2_1');
            c3.setNome('cavalo');
            c3.setLocal('#B1');
            cavalos[3] = c3;
	$('#cavalo_2_2').css({'top':$('#G1').position().top, 'left': $('#G1').position().left});
            var c4 = new Peca();
            c4.setId('#cavalo_2_2');
            c4.setNome('cavalo');
            c4.setLocal('#G1');
            cavalos[4] = c4;
}

function colocarBispo(){
	$('#bispo_1_1').css({'top':$('#C8').position().top, 'left': $('#C8').position().left});
            var b = new Peca();
            b.setId('#bispo_1_1');
            b.setNome('bispo');
            b.setLocal('#C8');
            bispos[1] = b;
	$('#bispo_1_2').css({'top':$('#F8').position().top, 'left': $('#F8').position().left});
            var b2 = new Peca();
            b2.setId('#bispo_1_2');
            b2.setNome('bispo');
            b2.setLocal('#F8');
            bispos[2] = b2;
	$('#bispo_2_1').css({'top':$('#C1').position().top, 'left': $('#C1').position().left});
            var b3 = new Peca();
            b3.setId('#bispo_2_1');
            b3.setNome('bispo');
            b3.setLocal('#C1');
            bispos[3] = b3;
	$('#bispo_2_2').css({'top':$('#F1').position().top, 'left': $('#F1').position().left});
            var b4 = new Peca();
            b4.setId('#bispo_2_2');
            b4.setNome('bispo');
            b4.setLocal('#F1');
            bispos[4] = b4;
}

function colocarRainha(){
	$('#rainha_1').css({'top':$('#D8').position().top, 'left': $('#D8').position().left});
            var r = new Peca();
            r.setId('#rainha_1');
            r.setNome('rainha');
            r.setLocal('#D8');
            rainhas[1] = r;
	$('#rainha_2').css({'top':$('#D1').position().top, 'left': $('#D1').position().left});
            var r2 = new Peca();
            r2.setId('#rainha_1');
            r2.setNome('rainha');
            r2.setLocal('#D1');
            rainhas[2] = r2;
}

function colocarRei(){
        $('#rei_1').css({'top':$('#E8').position().top, 'left': $('#E8').position().left});
            var r = new Peca();
            r.setId('#rei_1');
            r.setNome('rei');
            r.setLocal('#E8');
            reis[1] = r;
        $('#rei_2').css({'top':$('#E1').position().top, 'left': $('#E1').position().left});
            var r2 = new Peca();
            r2.setId('#rei_2');
            r2.setNome('rei');
            r2.setLocal('#E1');
            reis[2] = r2;
}



