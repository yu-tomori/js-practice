function asyncProcess(value) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (value) {
    resolve(`入力値： ${value}`);
   } else {
    reject(`入力は空です`);
   }
  }, 500);
 });
}

asyncProcess('トクジロウ').then(
 response => {
  console.log(response);
  return asyncProcess('パーティーピーポー');
 }
).then(
 response => {
  console.log(response);
 },
 error => {
  console.log(`エラー； ${error}`);
 }
);
