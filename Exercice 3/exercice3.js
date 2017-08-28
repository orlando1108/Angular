/*
Partie 1
Créer une classe Personne avec deux attributs : nom et prenom
et une methode permettant à la personne de se présenter au travers d'un
message dans la console.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
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
        this.nom = 'géniale';
        this.prenom = 'tortue';
    }
    Personne.prototype.sePresenter = function () {
        //presentation: string;
        var presentation = 'bonjour je m\'appelle ${this.prenom} ${this.nom}';
        console.log(presentation);
    };
    return Personne;
}());
/*
Partie 2
Créer une classe étudiant, héritant de la classe personne
Ajout un attribut cursus sur l'étudiant prenant dans un énumération
de votre création.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github

*/
var cursus;
(function (cursus) {
    cursus[cursus["DL"] = 0] = "DL";
    cursus[cursus["CDI"] = 1] = "CDI";
    cursus[cursus["ESI"] = 2] = "ESI";
})(cursus || (cursus = {}));
;
var Etudiant = (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant() {
        return _super.call(this) || this;
    }
    return Etudiant;
}(Personne));
