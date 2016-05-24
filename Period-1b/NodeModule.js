//OBS!! Module er required i filen "NodeModuleRequired", og derinde kan metoderne bruges.

function randomFunction(a, b) {
    return a + b;
}

module.exports = {

    sayRandomStuff: function () {
        console.log("Random stuff..");
    },

    addNumbers: function (a, b) {
        return randomFunction(a, b);
    }
};