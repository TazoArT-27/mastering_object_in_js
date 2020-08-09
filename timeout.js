function doSomething(){
    console.log(1111);
}
//doSomething();
// setTimeout(doSomething);
setTimeout(doSomething, 4000);
console.log(2222);
console.log(3333);

setTimeout(() => console.log(`Lazy and waiting`), 5000);

// setInterval(() => {
//     console.log("doing it");
// }, 2000);
