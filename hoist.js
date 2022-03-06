//  code 1

console.log(hello);                                   
var hello = 'world';

// rewritten

var hello = 'world';
console.log(hello);

// code 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// code rewritten

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

//  code 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//  code rewritten 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();

//  code 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//  coderewritten

var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
console.log(food);

//  code 5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//  code rewritten

var mean = function(){
    food = 'chicken';
    console.log(food);
    console.log(food);
}
mean();
var food = 'fish';
console.log(food);

//  code 6

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

//  code rewritten

var genre = 'disco';
function rewind(){
    var genre = 'r&b';
    console.log(genre);
    genre = 'rock';
    console.log(genre);
}
rewind();
console.log(genre);


//  code 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//  code rewritten

dojo = 'san jose';
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
learn();
console.log(dojo);

//  code 8 *bonus ES6:const

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


//  code rewritten

const dojo = {};
function makeDojo(name, students){
    dojo.students = students;
    dojo.name = name;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo === "closed for now";
    }
    return dojo;
} 
makeDojo();
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));