let name = "shafayat";
function add(num1, num2){
    let result = num1+num2;
    console.log(`Result inside ${result}`);
    console.log(`Name inside ${name}`);
    return result;
}

//console.log(`Result outside ${result}`);
console.log(`Name outside ${name}`);
let sum = add(10, 20);
console.log(sum);

