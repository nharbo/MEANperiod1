console.log(add(2,3)); //funktionen add bliver hoisted, og derfor kan vi kalde den inden vi angiver den.

function add(a, b){
    return a + b;
}

//----------------------------------

console.log(res);

var res = add(2, 3); //variablen res bliver hoisted, men ikke det vi sætter den lig med. Derfor kan vi ikke få res skrevet ud,
                     // før der er tildelt en værdi.

function add(a, b){
    return a + b;
}
