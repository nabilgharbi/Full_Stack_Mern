//1 a.Assignment:

console.log(hello);
var hello = 'world';

//output: "undefined"

//1 b.Prediction:

var hello;
console.log(hello);
hello = "world";

//output: "undefined"


//2 a.Assignment:

var needle = 'haystack';
test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}

//output: "magnet"

//2 b.Prediction: 

function test() {
    var needle = "magnet";
    console.log(needle);
}
var needle;
needle = "haystack";
test();

// output: "magnet"

//3 a.Assignment:
var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);

// output: "only okay"

//3 b.Prediction:

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
var brendan;
brendan = 'super cool';
print();
console.log(brendan);

//output = "only okay"

//4 a.Assignment:

var food = 'chicken';
console.log(food);
eat();

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//output = "chicken", "half-chicken"

//4 b.Prediction: 

function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
var food;
food = "chicken";
console.log(food);
eat();

//output: "chicken", "half-chicken"

//5 a.Assignment:

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//output: TypeError: mean is not a function

//5 b.Prediction: 

var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

//output: TypeError: mean is not a function

//6 a.Assignment:

console.log(genre);
var genre = "disco";
rewind();

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//output: undefined, "rock", "r&b", "disco"

//6 b.Prediction: 

function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre;
console.log(genre)
genre = "disco";
rewind();
console.log(genre)

//output: undefined, "rock", "r&b", "disco"

//7 a.Assignment:
dojo = "san jose";
console.log(dojo);
learn();

function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//output: "san jose", undefined, "seattle", "burbank", "san jose"

//7 b.Prediction: 

function learn() {
    var dojo;
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//output: "san jose", undefined, "seattle", "burbank", "san jose"

//8 a.Assignment:

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

//output: TypeError: Assignment to constant variable

//8 b.Prediction: 

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

//output: TypeError: Assignment to constant variable