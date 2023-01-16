// 通信のためのライブラリを読み込む
const net = require('net')

const SERVE_IP = '127.0.0.1'
const SERVE_PORT = '3000'

// 通信の出入り口を準備
const socket = new net.Socket()

// IPアドレスとポート番号を指定して、接続
// 3つ目の引数には、接続したら実行したいコールバックを書く
socket.connect(SERVE_PORT, SERVE_IP, () => {
  console.log(`connect to ${SERVE_IP}:${SERVE_PORT}`)
})

// 標準入力からデータを読み込んだなら何をするかを設定する
process.stdin.on('data', (data) => {
  // データを読み込んだら、通信の出入り口に書き込む
  // つまり、接続先に向けてメッセージを送る
  socket.write(data)
})

// 通信の出入り口からデータを受け取ったら何をするかを設定する
socket.on('data', (data) => {
  // データを受け取ったら、コンソール出力する
  console.log(`received: ${data}`)
})
