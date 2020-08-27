// boolean

let isCool: boolean = true;

//number

let age: number = 25;

//string
let eyeColor: string = "blue";
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

//Arrays
let Pets: string[] = ["cat", "dog", "pig"];
let superNpets: Array<string> = ["deagon", "vampire", "warewolf"];

//object
let wizard: object = {
  a: "jane",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string, number];
basket = ["shots", 10];

//Enum
enum Size {
  small = 1,
  Medium = 2,
  large = 3,
}
// let shirtSize : string = Size.small
let shirtSize: number = Size.small;

// Any !!!!!!!!!!!!!!!!! BE CAREFUL
let whatever: any = "aghhhhhhhhhhhhhhhhhhhhh nooooooooooooooo!!!!";
whatever = basket;

// void
let sing = (): void => {
  console.log("lala land");
};

// never
let error = (): never => {
  throw Error("ooops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
};

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}
let dog = {} as CatArmy;
dog.count;
