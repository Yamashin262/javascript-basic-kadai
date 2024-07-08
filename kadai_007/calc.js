const num = 11;
// 変数が３と５の倍数のとき
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
// 変数が５の倍数のとき
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
// 変数が３倍数のとき
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
// それ以外は変数を表示
else {
    console.log(num)
}