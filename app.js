'use strict';
const memo = new Map();
// n=0とn=1は決まっているものなので最初から入れておく
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if (memo.has(n)) {  // メモにデータがあればそれを使う
        return memo.get(n);
    } else {
    // メモにデータがないので計算する
    let value = fib(n-1) + fib(n-2); // 関数の定義の中で関数自身を呼び出すことを再帰
    memo.set(n, value);
    return value;
    }
}

for (let i = 0; i <= 40; i++) {
    console.log(i + "のフィボナッチ数は" + fib(i) + "です。")
}
