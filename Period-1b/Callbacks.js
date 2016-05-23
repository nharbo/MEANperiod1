//Userdefined callback functions - synkront eller asynkront, afhængigt af hvordan vi har designet vores callback.

//Design en callback:
function calc(a, b, callback) {
    return callback(a + b);
};

//function calc(a, b, callback) {
//    return callback(a * b);
//};

//function calc(a, b, callback) {
//    return callback(a - b);
//};

//Få resultatet af din callback:
var calc = calc(2, 3, function (result) {
    return result;
});

console.log(calc);

//------------------------

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//callback er endnu ikke defineret som en funktion, først inde i loopet
function myMap(array, callback) {

    var result = [];

    for (var i = 0; i < array.length; i++) {
        //Her defineres callback som en funktion, da vi giver et inputparameter med ind (et navn i dette tilfæde)
        //Hvad der sker med callbacken, er defineret i funktions-kaldet nedenfor (navnet laves til uppercase - og pushes til det nye array.)
        result.push(callback(array[i]));
    }
    return result;
}

//Callback'en tager et navn som parameter, som beskrevet ovenfor, og laver det til uppercase, og gemmer det derefter i det nye array.
//Man tænker lidt baglens faktisk.
var mapped = myMap(names, function (name) {
    return name.toUpperCase();
});

console.log(mapped);

