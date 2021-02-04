'use strict';

function fib(n) {
    if (n === 0) { 
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2); // 関数の定義の中で関数自身を呼び出すことを再帰
    
}

for (let i = 0; i <= 40; i++) {
    fib(i);
    console.log(i + "のフィボナッチ数は" + fib(i) + "です。")
}
