$(document).ready(function(){
        colocarRainha();
        colocarRei();
        colocarBispo();
        colocarCavalos();
	colocarPeoes_1();
	colocarPeoes_2();
	colocarTorres();
});

function colocarPeoes_1(){
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
	}


}

function colocarPeoes_2(){
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
		$('#peao_2_'+i).css({'top':$('#'+index[i]+'2').position().top, 'left': $('#'+index[i]+'2').position().left});
	}
}

function colocarTorres(){
	$('#torre_1_1').css({'top':$('#A8').position().top, 'left': $('#A8').position().left});
	$('#torre_1_2').css({'top':$('#H8').position().top, 'left': $('#H8').position().left});
	$('#torre_2_1').css({'top':$('#H1').position().top, 'left': $('#H1').position().left});
	$('#torre_2_2').css({'top':$('#A1').position().top, 'left': $('#A1').position().left});
}

function colocarCavalos(){
	$('#cavalo_1_1').css({'top':$('#B8').position().top, 'left': $('#B8').position().left});
	$('#cavalo_1_2').css({'top':$('#G8').position().top, 'left': $('#G8').position().left});
	$('#cavalo_2_1').css({'top':$('#B1').position().top, 'left': $('#B1').position().left});
	$('#cavalo_2_2').css({'top':$('#G1').position().top, 'left': $('#G1').position().left});
}

function colocarBispo(){
	$('#bispo_1_1').css({'top':$('#C8').position().top, 'left': $('#C8').position().left});
	$('#bispo_1_2').css({'top':$('#F8').position().top, 'left': $('#F8').position().left});
	$('#bispo_2_1').css({'top':$('#C1').position().top, 'left': $('#C1').position().left});
	$('#bispo_2_2').css({'top':$('#F1').position().top, 'left': $('#F1').position().left});
}

function colocarRainha(){
	$('#rainha_1').css({'top':$('#D8').position().top, 'left': $('#D8').position().left});
	$('#rainha_2').css({'top':$('#D1').position().top, 'left': $('#D1').position().left});
}

function colocarRei(){
	$('#rei_1').css({'top':$('#E8').position().top, 'left': $('#E8').position().left});
	$('#rei_2').css({'top':$('#E1').position().top, 'left': $('#E1').position().left});
}



