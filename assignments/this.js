/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding-while in global scope the this keyword will refer to the window object
* 2. implicit binding-the object that this refers to is to the left of the dot
* 3. explicit binding-uses the call or apply method to tell this where it needs to be defined
* 4. new binding-uses a constructor and this refers to the object that is returned by said constructor
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(greeting){
    console.log(this);
    return greeting;
}
console.log(hello("hi"));

// Principle 2

// code example for Implicit Binding

const hero = {
    name: "spiderman",
    nickname: "spidy",
    alertDanger: function() { console.log(`My ${this.nickname} senses are going off!`)},
};

hero.alertDanger();



// Principle 3

// code example for New Binding

function AveragePerson(name) {
    this.name = name;
    this.ask = function() {
        console.log(`I'm ${this.name}. Have you seen my killer?`);
    };
}

const johnDoe = new AveragePerson("John Doe");

johnDoe.ask();


// Principle 4

// code example for Explicit Binding

const villain = {
    name: "Otto",
    nickname: "Dr. Octopus",
}

hero.alertDanger.call(villain);