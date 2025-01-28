function square(num){
    return num * num;
}

console.log(square(3));

const greet = (name) => `Hello, ${name}!`;

console.log(greet('World'));

function counter(){
    let count = 4;
    return function(){
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());