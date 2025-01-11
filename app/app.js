"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",home); // use -> 미들웨어를 등록해주는 메서드.
module.exports = app;









// const http = require("http");
// const app = http.createServer((req,res) =>{
//     res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"}); //200은 정상응답 코드를 보내줌
//     if(req.url == '/'){
//         res.end("여기는 루트입니다.")
//     } else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.")
//     };
// });
// app.listen(3001, ()=>{
//     console.log("http 가동서버");
// });
