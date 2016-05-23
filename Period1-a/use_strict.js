
//variaber skal være definerede, før du kan tildele dem værdi, når use strict er på
var useStrictEx1 = {
    useStrictOn: function () {
        "use strict";
        return x = "when use strict is on"; //Giver fejl - variablen er ikke defineret, inden den får en værdi.
    },
    useStrictOff: function () {
        return y = "when use strict is off"; //Her er det okay
    }
};

//----------------------------------

//Du kan ikke bruge ord, som er "reserverede", når use strict er på.
var useStrictEx2 = {
    useStrictOn: function () {
        "use strict";
        var interface = "hello world"; //Giver fejl - ordet interface er reserveret af JS
    },
    useStrictOff: function () {
        var hello = "hello world"; //Her er det okay
    }
};