function champEstVide(){
	var champ1 = document.getElementById('nouveauMdp').value;
	var champ2 = document.getElementById('confirmation').value;
	if(champ1 != '' && champ2 != '' && champ1 == champ2){
		return true;
	}else if(champ1 != champ2){
		alert('Les champs \'nouveau mot de passe\' et \'confirmation\' sont différents');
		return false;
	}else if(champ1 == ''){
		alert('Le champ \'nouveau mot de passe\' est vide');
		return false;
	}else{
		alert('Le champ \'confirmation\' est vide');
	}
}

function champEstVide2(){
	var champ1 = document.getElementById('nouveauMdp').value;
	var champ2 = document.getElementById('confirmation').value;
	if(champ1 != '' && champ2 != '' && champ1 == champ2){
		return true;
	}else if(champ1 != champ2){
		document.write('Les champs \'nouveau mot de passe\' et \'confirmation\' sont différents');
		return false;
	}else if(champ1 == ''){
		document.write('Le champ \'nouveau mot de passe\' est vide');
		return false;
	}else{
		document.write('Le champ \'confirmation\' est vide');
	}
}