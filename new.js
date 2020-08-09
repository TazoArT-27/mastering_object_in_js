class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}
const heroPerson = new Person("Hero", "Steve", 23000);
console.log(heroPerson);
const friendlyPerson = new Person("Hero", "Bak", 28000);
console.log(friendlyPerson);

// this keyword also works on function but this is old method
function Person1(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

}
const oldPerson = new Person1("Grand", "Papa", 2000);
console.log(oldPerson);



