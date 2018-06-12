function champEstVide(){
	var champ1 = document.getElementById('nouveauMdp').value;
	var champ2 = document.getElementById('confirmation').value;
	if(champ1 != '' && champ2 != '' && champ1 == champ2){
		return true;
	}else if(champ1 == ''){
		document.getElementById('erreur1').innerHTML = 'Le champ nouveau mot de passe est vide'
		return false;
	}else if(champ2 == ''){
		document.getElementById('erreur2').innerHTML = 'Le champ confirmation est vide'
		return false;
	}else{
		document.getElementById('erreur3').innerHTML = 'Les champs nouveau de mot de passe et confirmation sont différents';
	}
}