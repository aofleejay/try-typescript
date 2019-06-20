var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.say = function () {
        console.log('Meow.');
    };
    return Animal;
}());
var cat = new Animal('Nuan');
console.log(cat.getName());
var Pokemon = /** @class */ (function () {
    // Shorthand class property assignment
    function Pokemon(name) {
        this.name = name;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    return Pokemon;
}());
var pikachu = new Pokemon('Pikachu');
console.log(pikachu.getName());
