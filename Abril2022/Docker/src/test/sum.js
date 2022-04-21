/*const sum = (x, y) => {
    const n=  x + y;
    return n
}*/

/*const printNumbers = (start, end) =>{
    console.log(start);
    if(start < end){
        printNumbers((start + 1), end);
    }
}
printNumbers(0, 100);*/

const print = (number) =>{
    if(number === 0) return  0 
    if (number === 1) return 1
    if (number % 3 === 0 && number % 5 === 0)return "FizzBuzz"
    if (number % 3 === 0) return "fizz"
    if (number % 5 === 0) return "buzz"
   
}


module.exports= print;