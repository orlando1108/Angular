/*
Considérant l'interface et la classe suivante :
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = (function () {
    function Personne() {
    }
    return Personne;
}());
/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/
/* */
// enfant
var Etudiant = (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Etudiant;
}(Personne));
/* */
//classe
var Professeur = (function () {
    function Professeur() {
    }
    return Professeur;
}());
/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.

il manque l'attribut telephone de l'interface contact
*/
var Stagiaire = (function () {
    function Stagiaire() {
    }
    return Stagiaire;
}());
