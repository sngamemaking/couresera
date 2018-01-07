function ajouterLigne()
{
	var tableau = document.getElementById("tableau");

	var ligne = tableau.insertRow(-1);//on a ajouté une ligne

	var colonne1 = ligne.insertCell(0);//on a  ajouté une cellule
	colonne1.innerHTML += document.getElementById("nom").value;//on y met le contenu du prenom

	var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
	colonne2.innerHTML += document.getElementById("prenom").value; //on y met le contenu du nom
	
	var colonne3 = ligne.insertCell(2);//on a une ajouté la troisiéme cellule
	colonne3.innerHTML += document.getElementById("email").value;//on y met le contenu de l'email

	var colonne4 = ligne.insertCell(3);//on ajoute la derniere cellule
	colonne4.innerHTML += document.getElementById("telephone").value; // on y met le contenu du telephone
document.getElementById('nom').value="";
document.getElementById('prenom').value="";
document.getElementById('email').value="";
document.getElementById('telephone').value="";
	
}



