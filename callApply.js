const normalPerson = {
    firstName: "Shafayat",
    lastName: "Tazoar",
    salary: 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }

}
// console.log(normalPerson);

// console.log(normalPerson.firstName);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);