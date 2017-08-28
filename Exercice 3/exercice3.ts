/*
Partie 1
Créer une classe Personne avec deux attributs : nom et prenom
et une methode permettant à la personne de se présenter au travers d'un
message dans la console.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

class Personne {
	nom: string;
	prenom: string;
	
	constructor(){
		this.nom = 'géniale';
		this.prenom = 'tortue';
	}
	
    sePresenter(): void{
		//presentation: string;
		let presentation = 'bonjour je m\'appelle ${this.prenom} ${this.nom}';
		console.log(presentation);
	}
}


/*
Partie 2
Créer une classe étudiant, héritant de la classe personne
Ajout un attribut cursus sur l'étudiant prenant dans un énumération
de votre création.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github

*/
enum cursus {DL, CDI, ESI};

class Etudiant extends Personne{
	
	
	constructor(){
		super();
	}
	
}
