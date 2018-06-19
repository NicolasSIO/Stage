function champEstVideId(){
	var champId = document.getElementById('identifiant');
	var erreurId = document.getElementById('erreur_identifiant');
	var erreurOk = document.getElementById('envoi_ok');
	var erreurNok = document.getElementById('envoi_erreur');
	var hasError = false;
	
	if(champId.value == ""){
		erreurId.innerHTML = 'Le champ identifiant est vide';
		hasError = true;
	}
	
	if (hasError) {
		erreurNok.innerHTML = "Il y a eu une erreur lors de la saisie de votre identifiant";
		erreurNok.style.display = "block";
		erreurOk.style.display = "none";
		champId.value = '';
		return true;
	} else {
		erreurOk.innerHTML = "Vous allez recevoir un mail avec un lien vous permettant de modifier votre mot de passe";
		erreurOk.style.display = "block";
		erreurNok.style.display = "none";
		return false;
	}
}

function champEstVideMdp(){
	var champNouvMdp = document.getElementById('nouveauMdp');
	var champConfirm = document.getElementById('confirmation');
	var erreurNouvMdp = document.getElementById('erreur_nouveauMdp');
	var erreurConfirm = document.getElementById('erreur_confirmation');
	var erreurOk = document.getElementById('envoi_ok');
	var erreurNok = document.getElementById('envoi_erreur');
	var hasError = false;
	
	if(champNouvMdp.value == ""){
		erreurNouvMdp.innerHTML = 'Le champ nouveau mot de passe est vide';
		hasError = true;
	}
	if(champConfirm.value == ""){
		erreurConfirm.innerHTML = 'Le champ confirmation est vide';
		hasError = true;
	}
	if(champNouvMdp.value != ""&& champConfirm.value != "" && champNouvMdp.value != champConfirm.value){
		erreurConfirm.innerHTML = 'Les champs nouveau de mot de passe et confirmation sont différents';
		hasError = true;
	}
	
	if (hasError) {
		erreurNok.innerHTML = "Votre mot de passe n'a pas été modifié";
		erreurNok.style.display = "block";
		erreurOk.style.display = "none";		
		champNouvMdp.value = '';
		champConfirm.value = '';
		return true;
	} else {
		erreurOk.innerHTML = "Votre mot de passe a bien été modifié";
		erreurOk.style.display = "block";
		erreurNok.style.display = "none";
		return false;
	}
}

function effacerErreurGenerique(champ){
	var idDivErreur = 'erreur_' + champ.id;
	document.getElementById(idDivErreur).innerHTML = "";
}