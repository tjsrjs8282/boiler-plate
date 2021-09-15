const express = require('express');
const mongoose = require('mongoose');
//express 앱을 만들다
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const config = require('./config/key');

const {User} = require("./models/User");
 
//application / x-xxx-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
//application / json
app.use(bodyParser.json());


mongoose.connect('config.mongoURI',{
   //에러안뜨게 4가지 추가
   useNewUrlParser:true, useUnifiedTopology:true
 }).then(()=> console.log('잘들어감zz')).catch(err=>console.log(err))




//불러오면 핼로월드 글자
app.get('/', (req, res) => {
  res.send('Hello World! 백앤드 가주아잉!!!!!!!')
})

app.post('/register', (req, res) => {

  //회원가입시 필요한 정보들을 client 에서 가여오면 그것들을 데이터베이스에 넣어준다.


  const user = new User(req.body)

  user.save((err, userInfo)=>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })

})

//리슨을하면 터미널에 문자로그
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})