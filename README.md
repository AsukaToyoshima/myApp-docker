# 概要
本アプリは、カリキュラム「Webアプリケーション基礎〜サーバーを動かしてみよう〜」で作成するミニアプリです。Ruby Sinatra作成したmyApp.rbと同じ機能を持ちます。DockerCompose対応済み。

# 導入・動作確認手順

dockerが動く環境で本アプリをクローンし、カレントディレクトリを本アプリに移動し、以下を実行してください。
```
docker-compose up --build -d
```
'localhost:3000/hello'で動作確認できます。

終了時は以下のコマンドを実行してください。
```
docker-compose down
``