function square(num){
    return num * num;
}

console.log(square(3));

const greet = (name) => `Hello, ${name}!`;

console.log(greet('World'));

function counter(){
    let count = 5;
    return function (){
        count++;
        return count;
    };
}

const count = counter();
console.log(counter());
console.log(counter());