function fib(a){
    let f0 = 0;
    let f1 = 1;
    for(let i=0;i <= a;i++){
        let temp = f1;
        f1 = f1+f0;
        f0 = temp;
    }
    console.log(a,"fib :", f1)
}
fib(20);