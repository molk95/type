// boolean
var isCool = true;
//number
var age = 25;
//string
var eyeColor = "blue";
var favouriteQuote = "I'm not old, I'm only " + age;
//Arrays
var Pets = ["cat", "dog", "pig"];
var superNpets = ["deagon", "vampire", "warewolf"];
//object
var wizard = {
    a: "jane"
};
// null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ["shots", 10];
//Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
// let shirtSize : string = Size.small
var shirtSize = Size.small;
// Any !!!!!!!!!!!!!!!!! BE CAREFUL
var whatever = "aghhhhhhhhhhhhhhhhhhhhh nooooooooooooooo!!!!";
whatever = basket;
// void 
var sing = function () {
    console.log('lala land');
};
// never
var error = function () {
    throw Error('ooops');
};
