// 1
// ex:
console.log(hello);
var hello = 'world';
// output:Uncaught ReferenceError: hello is not defined

//  my prediction
var hello
var hello = 'world';
console.log(hello)
// output: world



//2
// ex
var needle = 'haystack';
test();
// output:magnet
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//my prediction
var needle
test()
// output:magnet
function test() {
    var needle = 'magnet'
    console.log(needle)
}
var needle = 'haystack'




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
console.log(brendan);
// output: super cool


// 4
// ex
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// output: Uncaught ReferenceError: food is not defined
// output:Uncaught ReferenceError: eat is not defined
// prediction
var food = 'chicken';
eat();
// output: half-chicken
function eat() {
    var food
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food);
// output: chicken



// 5
// ex
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// output: Uncaught ReferenceError: mean is not defined

// prediction
mean();
// output: chicken
// output: fidh
var mean = function () {
    var food
    food = "chicken";
    var food = "fish";
    console.log(food);
    console.log(food);
}
console.log(food);
console.log(food);
// output: chicken
// output: chicken


// 6
// ex
console.log(genre);
// output: Uncaught ReferenceError: genre is not defined
var genre = "disco";
rewind();
// output: Uncaught ReferenceError: rewind is not defined

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
rewind();
// output:rock
// output:r&b
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output:dicso
console.log(genre);
// output:disco

// 7
// ex
dojo = "san jose";
// output:'san jose'
console.log(dojo);
// output:san jose

learn();
// output: Uncaught ReferenceError: learn is not defined
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// prediction
dojo
// output:'san jose'
learn();
// output: seattle
// output: burbank
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
// output:'san jose'
console.log(dojo);
// output: san jose
console.log(dojo);
// output: san jose

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
    let dojo = {};
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
