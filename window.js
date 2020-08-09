let name = "shafayat";
function add(num1, num2){
    let result = num1+num2;
    console.log(`Result inside ${result}`);
    console.log(`Name inside ${name}`);
    // return result;
    function double(num){
         
        return num*2;

    }
    let total = double(result);
    return total;
}

//console.log(`Result outside ${result}`);
// console.log(`Name outside ${name}`);
// let sum = add(10, 20);
// console.log(sum);
let sum = add(10, 20);
console.log(sum);

