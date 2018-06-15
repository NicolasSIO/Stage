function champEstVide(){
	var champ1 = document.getElementById('nouveauMdp').value;
	var champ2 = document.getElementById('confirmation').value;
	var hasError = false;
	
	if(champ1 == ""){
		document.getElementById('erreur-nouveauMdp').innerHTML = 'Le champ nouveau mot de passe est vide';
		document.getElementById('confirmation').value = '';
		document.getElementById('envoi_erreur').innerHTML = "Votre mot de passe n'a pas été modifié"
		document.getElementById('envoi_erreur').style.display = "block";
		hasError = true;
	}
	if(champ2 == ""){
		document.getElementById('erreur-confirmation').innerHTML = 'Le champ confirmation est vide';
		document.getElementById('nouveauMdp').value = '';
		document.getElementById('envoi_erreur').innerHTML = "Votre mot de passe n'a pas été modifié"
		document.getElementById('envoi_erreur').style.display = "block";
		hasError = true;
	}
	if(champ1 != ""&& champ2 != "" && champ1 != champ2){
		document.getElementById('erreur-confirmation').innerHTML = 'Les champs nouveau de mot de passe et confirmation sont différents';
		document.getElementById('nouveauMdp').value = '';
		document.getElementById('confirmation').value = '';
		document.getElementById('envoi_erreur').innerHTML = "Votre mot de passe n'a pas été modifié"
		document.getElementById('envoi_erreur').style.display = "block";
		hasError = true;
	}
	if(champ1 != "" && champ2 != "" && champ1 == champ2){
		document.getElementById('envoi_ok').innerHTML = "Votre mot de passe a bien été modifié"
		document.getElementById('envoi_ok').style.display = "block";
		document.getElementById('envoi_erreur').style.display = "none";
		document.getElementById('nouveauMdp').value = '';
		document.getElementById('confirmation').value = '';
	}else{
		document.getElementById('envoi_ok').style.display = "none";
	}
	
	if (hasError) {
		return true;
	} else {
		return false;
	}
}

function champEstVide2(){
	var champ1 = document.getElementById('identifiant').value;
	var hasError = false;
	
	if(champ1 == ""){
		document.getElementById('identifiant').value = '';
		document.getElementById('envoi_erreur').innerHTML = "Il y a eu une erreur lors de la saisie de votre identifiant"
		document.getElementById('envoi_erreur').style.display = "block";
		document.getElementById('envoi_ok').style.display = "none";
		hasError = true;
	}else{
		document.getElementById('envoi_ok').innerHTML = "Vous allez recevoir un mail dans votre boîte mail"
		document.getElementById('envoi_ok').style.display = "block";
		document.getElementById('envoi_erreur').style.display = "none";
		document.getElementById('identifiant').value = '';
		hasError = false;
	}
	
	if (hasError) {
		return true;
	} else {
		return false;
	}
}

function effacerErreur(){
	var champ1 = document.getElementById('nouveauMdp').value;
	var champ2 = document.getElementById('confirmation').value;
	
	if(champ1 != ""){
		document.getElementById('erreur-nouveauMdp').innerHTML = "";
	}
	if(champ2 != ""){
		document.getElementById('erreur-confirmation').innerHTML = "";
	}
	if(champ1 != "" && champ2 != "" && champ1 == champ2){
		document.getElementById('erreur-confirmation').innerHTML = "";
	}
}