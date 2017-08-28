/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function testString(a) {
    var color = "blue";
    console.log('string ' + color);
    return color;
}
function testNumber(b) {
    var age = 37;
    console.log('number : ' + age);
    return age;
}
function testBool(c) {
    var isDone = false;
    console.log('boolean : ' + isDone);
    return isDone;
}
function testList1(d) {
    var list = [1, 2, 3];
    console.log('list : ' + list);
    return list;
}
function testList2(e) {
    var list = [1, 2, 3];
    console.log('list : ' + list);
    return list;
}
function testTuple(f) {
    var x = ['toto', 2];
    console.log('tuple : ' + x);
    return x;
}
function testEnum() {
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    console.log('enum : ' + Color.Red);
    return Color.Green;
}
function testAny() {
    var myAny = 4;
    console.log('any : ' + myAny);
    return myAny;
}
function testVoid(name) {
    console.log('bonjour ' + name);
}
function testNullUndefined() {
    var und = undefined;
    var nul = null;
    console.log('null and undefined : ' + und + nul);
}
function anError(message) {
    throw new Error(message);
}
function aLoop() {
    while (true) {
        console.log('u r in a obvious loop !!  ');
    }
}
