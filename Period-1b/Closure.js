
function functionScope() {
    var comeGetMe = "Come get me!";

    function print() { //inner-funktion (Closure/private function)
        console.log(comeGetMe);
    }

    outsider(print); //Vi giver print-funktionen med ud til outsider-funktionen, som kalder den udenfor det "lokale scope"
}

function outsider(print) { //når functionScope funktionen kaldes, gives print-funktionen med til denne funktion, som printer.
    print(); //Her køres printmetoden UDENFOR sit "lokale scope", selvom den er defineret INDEN I det "lokale scope"
}            // Vigtigt at notere, at det ikke er en kopi af metoden, men den rigtige metode som køres, bare udenfor scopet.

functionScope();


//-----Eksempel 2-----

function randomFunc() {
    var hello = "Hello World!";

    function closure() { //Dette er vores closure, kun denne har adgang til "hello"-variablen, og derfor er "hello" private.
        console.log(hello);
    }

    return closure;
}
var getHello = randomFunc(); //getHello er nu en closure, og vi kan få indholdet, selvom det kun er tilgængeligt inde i
getHello();                  // randomFunc's scope(private)

//-----Eksempel 3-----
//MODULE PATTERN
var add = (function () {
    var counter = 0; //private, da den kun er tilgængelig i dette scope

    function plusOne () { //lægger 1 til counter, hvergang den bliver kaldt, og udskriver
        return console.log(counter += 1);
    }
    return {
        doIt: function(){plusOne()}
    }
});

var increment = add();
increment.doIt(); //Vi kan ændre den private variabel udefra, på denne måde, selvom den kun eksisterer i "add"'s scope.
increment.doIt();
increment.doIt();


//-----Eksempel 4-----

function random() {
    var hej = "hej hiller";
    return function () {
        return console.log(hej);
    }
};
random()(); //kalder funktionen i funktionen.