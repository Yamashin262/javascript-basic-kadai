// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');
const btn = document.getElementById('btn');


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
const text2 = document.createElement('h4');
// 要素に「ボタンをクリックしました」というテキストを表示する
text2.textContent = 'ボタンをクリックしました';
text.removeChild(text.firstChild);
text.appendChild(text2);

});