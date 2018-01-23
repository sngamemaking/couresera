function ajouter()
{
	var tableau = document.getElementById("tableau");

var ligne = tableau.insertRow(-1);

	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += document.getElementById("nom").value;
	
var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML += document.getElementById("prenom").value;
	
	var colonne3 = ligne.insertCell(2);
	colonne3.innerHTML += document.getElementById("email").value;

	var colonne4 = ligne.insertCell(3);
	
	colonne4.innerHTML += document.getElementById("telephone").value; 
	
document.getElementById('nom').value="";
document.getElementById('prenom').value="";
document.getElementById('email').value="";
document.getElementById('telephone').value="";
	
}


