const normalPerson = {
    firstName: "Shafayat",
    lastName: "Tazoar",
    salary: 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1200);
// console.log(friendlyPerson);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 2300, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 4000, 600, 60);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);
