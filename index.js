const express = require('express');
const mongoose = require('mongoose');
//express 앱을 만들다
const app = express()
const port = 3000

 
mongoose.connect('mongodb+srv://seongeon:tlqkfsha2!@cluster0.20joh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
   //에러안뜨게 4가지 추가
   useNewUrlParser:true, useUnifiedTopology:true
 }).then(()=> console.log('잘들어감zz')).catch(err=>console.log(err))




//불러오면 핼로월드 글자
app.get('/', (req, res) => {
  res.send('Hello World! 백앤드 가주아잉!')
})

//리슨을하면 터미널에 문자로그
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})