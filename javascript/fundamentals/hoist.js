// 1
// ex:
console.log(hello);
var hello = 'world';
// output:undefined

//  my prediction
var hello
var hello = 'world';
console.log(hello)
// output: world



//2
// ex
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet'
    console.log(needle);
}
// output:magnet


//my prediction
var needle
// output:magnet
function test() {
    var needle
    needle = 'magnet'
    console.log(needle)
}
var needle = 'haystack'
test();




// 3
// ex
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// output: supercool

// prediction
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool'
// output: super cool


// 4
// ex
// console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// output: Uncaught ReferenceError: food is not defined
// output:Uncaught ReferenceError: eat is not defined
// prediction
// output: half-chicken
function eat() {
    var food
    food = 'half-chicken';
    console.log(food);
    food= 'gone'
}
// console.log(food);// food is not defined outside of scope
eat();
// output: half-chicken



// // 5
// // ex
// mean(); // // output: TypeError: mean is not a function
// console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);


// // // prediction

var mean = function () {
    var food
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean()
// // output: chicken
// // output: fish
// console.log(food);
// console.log(food);
// // output: food is not defined outside of function sscope


// // 6
// // ex
console.log(genre);
// // output: undefined
var genre = "disco";
rewind();
// // output: r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output: disco

// prediction
var genre
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre); //output: reock
genre = 'disco'

rewind();
// output:r&b

// // 7
// // ex
// dojo = "san jose";
// // output:'san jose'
// console.log(dojo);
// // output:san jose

// learn();
// // output: Uncaught ReferenceError: learn is not defined
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// prediction
// dojo //dojo not defined
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    // output: seattle
    dojo = "burbank";
    console.log(dojo);
    //output is burbank
}
dojo = "san jose";
console.log(dojo);
// output:'san jose' 1st san jose
learn();
// output: seattle, burbank
console.log(dojo);
// output: san jose 2nd san jose





// 8
// ex
console.log(makeDojo("Chicago", 65));
// output:Uncaught ReferenceError: makeDojo is not defined
console.log(makeDojo("Berkeley", 0));
// output:Uncaught ReferenceError: makeDojo is not defined

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// prediction
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
// output: { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));
// output: clsoed for now
