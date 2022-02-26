function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;s
    }
}

let clock1 = stopWatch ();
console.log(clock1());
console.log(clock1());