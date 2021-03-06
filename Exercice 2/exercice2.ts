/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

function testString(a: string): string {
    let color: string = "blue";
    console.log('string ' + color);
    return color;
}

function testNumber(b: number): number {
    let age: number = 37;
    console.log('number : ' + age);
    return age;
}

function testBool(c: boolean): boolean {
    let isDone: boolean = false;
    console.log('boolean : ' + isDone);
    return isDone;
}

function testList1(d: number[]): number[] {
    let list: number[] = [1, 2, 3];
    console.log('list : ' + list);
    return list;
}

function testList2(e: Array<number>): Array<number> {
    let list: Array<number> = [1, 2, 3];
    console.log('list : ' + list);
    return list;
}
function testTuple(f: [string, number]): [string, number] {
    let x: [string, number] = ['toto', 2];
    console.log('tuple : ' + x);
    return x;
}
function testEnum(): any {
  enum Color {Red, Green, Blue}
    console.log('enum : ' + Color.Red);
    return Color.Green;
}
function testAny(): any {
    let myAny: any = 4;
    console.log('any : ' + myAny);
    return myAny;
}
function testVoid(name: string ): void {
    console.log('bonjour '+ name);

}
function testNullUndefined() {
    let und: undefined = undefined;
    let nul: null = null;
    console.log('null and undefined : ' + und + nul);
    
}
function anError(message: string): never {
    throw new Error(message);
}

function aLoop(): never {
    while (true) {
      console.log('u r in a obvious loop !!  ' )
    }
}
