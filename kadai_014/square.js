function square(number) {  // 引数numberで値を受け取る関数を定義します
var result = number ** 2;  // 受け取った値を二乗して計算結果を変数resultに代入します
return result;  // 計算結果を戻り値として返します
}
var result = square(10);  // square関数に値10を渡し、計算結果を変数resultに代入します
console.log(result);