// Object Prototype  => add element in multiple object
// we can change object (it is super class keyword)
function constructor(first, last, age, cls){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.class = cls
    // this.nationality =  "indian";
};

var obj = new constructor("adnan", "belim", 20, 12);
var obj1 = new constructor("adn", "elim", 19, 11);
console.log(obj);
console.log(obj1);
constructor.prototype.nationality =  "indian";
console.log(obj);