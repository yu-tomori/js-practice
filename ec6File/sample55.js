Promise.all([
 asyncProcess('トクジロウ'),
 asyncProcess('パーティーピーポー'),
 asyncProcess('')
]).then(
 response => {
  console.log(response);
 },
 error => {
  console.log(`エラー： ${error}`);
 }
);
