//Udenfor et objekt, referer this til det globale objekt (hvis vi ikke er i 'strict mode'), ellers hører this til objektet.
// Vi kan lave en reference til den globale "this", ved at gemme denne i en variabel (fx. var self = this)

var random = "random stuff1";
function randomFunction() {
    //'use strict' // - Virker ikke, fordi der så ikke er noget objekt/context til at kalde random.
    console.log(this.random)
}
//Skal køres i en browser, før dette virker, da "global object" er "window", som er browseren.
randomFunction(); //Burde returnere "random stuff1", fordi this refererer til det globale objekts "random"

var o2 = {random: "random stuff2", randomFunction: randomFunction}; //randomFunction er en reference til funktionen.
o2.randomFunction(); //Returnerer "random stuff2", fordi objektet "ejer" this (da objektet er context), og derfor refererer this, til objektets random-attribut.

var obj1 = {
    random: "random stuff in object",
    func: function () {
        console.log(this.random)
    }
};

obj1.func(); //Returnerer "random stuff in object", fordi this tilhører det objekt som kalder funktionen

var obj2 = {random: "random stuff in object2", func: obj1.func};
obj2.func(); //Returnerer "random stuff in object2", fordi this refererer til det objekt som kalder funktionen.

var random = "random stuff in global object";
var func = obj1.func;
func(); //Burde returnere "random stuff in global object", fordi this refererer til random-attributten i global-object.

