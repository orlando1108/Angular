/*
Considérant l'interface et la classe suivante :
*/

class Personne {
  private nom: string;
  private prenom: string;
}

interface Contact extends Personne {
  telephone: number;
}

/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/

/* */
// enfant
class Etudiant extends Personne {}

/* */
//classe
class Professeur {
  private nom: string;
  private prenom: string;
  telephone: number;
}

/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.

il manque l'attribut telephone, nom, prenom de l'interface contact
*/
class Stagiaire implements Contact {
	/*telephone: number;
	private nom: string;
    private prenom: string;*/
}
