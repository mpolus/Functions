function square(num){
    return num * num;
}

console.log(square(3));

const greet = (name) => `Hello, ${name}`;

function createCounter(){
    let count = 5;
    return function (){
        count++;
        return count;
    }
}
