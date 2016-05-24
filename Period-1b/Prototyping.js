//Prototyping bruges på constructor function-objekter, da vi kan lave flere af dem.

function Person(firstName, lastName, age) { //Constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getInfo = function () {
        return "firstname: " + firstName + ", lastname: " + lastName + ", age: " + age
    };
    // ovenstående er en DÅRLIG løsning, da denne funktion kommer med i hvert objekt, hvilket optager hukommelse!
}

//Istedet laves prototyping
Person.prototype.getInfoProto = function () {
    return "firstname: " + this.firstName + ", lastname: " + this.lastName + ", age: " + this.age
}; //this referer altid til det context som kalder objektet.

var nico = new Person("nicolai", "harbo", 29);
//console.log(nico.getInfo());
console.log("PROTOTYPE: " + nico.getInfoProto());


//var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};
//Giver ingen mening at lave prototype på et enkelt objekt, da dette kun bruges 1 gang, og vi derfor kan kalde myHonda.color i stedet
// eller hvad vi nu vil have ud af objektet.