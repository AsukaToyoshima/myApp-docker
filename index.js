const express = require("express")
const app = express();

// ルートパスへアクセスしたときのルーティング
// app.get( '/' , function(req,res){
//   // 変数sampleに"こんにちは"という文字列を代入する
//   sample = "こんにちは"
//   // 変数sampleに代入された値をブラウザに表示する
//   res.send(`<p>TestText${sample}</p>`);
// })

//最初に「ルートパスへアクセスしたときのルーティング」を記載し、その後以下に書き換える
app.get("/hello", function(req,res){
  sample = "こんにちは"
  res.send(`<p>TestText${sample}</p>`);
})

app.listen(3000, function(){
  console.log("start server...")
});