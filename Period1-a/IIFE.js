function wrapperIIFE(){

    var someText = "blablabla";

    (function(){
        var someText = "hehehe"; //Vi laver et lokalt scope, som køres med det samme..
        console.log(someText);
    })(); //metoden bliver kaldt, grundet ();

    console.log(someText);

}
wrapperIIFE();

//Vi kører metoden, og når vi kommer til vores IIFE bliver den kørt automatisk, og skriver til console,
// og efterfølgende udskrives den sidste console.log.