const today = () => {
const today = new Date();
console.log(today.getFullYear());// 年の取得
console.log(today.getMonth() + 1);// 月の取得
console.log(today.getDate());// 日の取得
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // 月は0ベースなので1を足す
const date = currentDate.getDate();
const formattedDate = `${year}年${month}月${date}日`;
console.log(formattedDate);
};
today();