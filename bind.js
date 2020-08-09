const normalPerson = {
    firstName: "Shafayat",
    lastName: "Tazoar",
    salary: 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// console.log(normalPerson);
// console.log(normalPerson.firstName);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: "hero",
    lastName: "alom",
    salary: 27000,
}
const friendlyPerson = {
    firstName: "hero",
    lastName: "golam",
    salary: 23000,
}
// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1200);
console.log(friendlyPerson);
