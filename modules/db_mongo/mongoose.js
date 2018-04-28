const mongoose = require('mongoose');

mongoose.connect('mongodb://39.104.166.99:27017/runoob');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongo is open')
    // we're connected!
});

var Schema = mongoose.Schema;

var userObj = new Schema({
    name: { type: String, index: { unique: true } },
    nick: String,
    password: String,
    email: String,
    submit: Number,
    solved: Number,
    regTime: String,
    privilege: String
});

// 创建users集合
mongoose.model('users', userObj);

var users = mongoose.model('users');

var user={
    name:'zhangsan',
    nick:'张三',
    password:'123456',
    email: 'asdf@qq.com',
    submit: 1,
    solved: 1,
    regTime: 'String',
    privilege: 'String'
}

var createUser=new users(user);

createUser.save(function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
})

// module.exports=mongoose;