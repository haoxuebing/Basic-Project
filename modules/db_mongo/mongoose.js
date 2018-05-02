const mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://39.104.166.99:27017/runoob');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongo is open')
    // we're connected!
});

// mongoose.connect('mongodb://39.104.166.99:27017/runoob');
// var db = mongoose.connection;

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

//注册静态方法 findByName
userObj.static('findByName', function (name, callback) {
    return this.find({ name: name }, callback);
})

// 创建users集合
var users = db.model('users', userObj);


// var user = {
//     name: 'zhangsan',
//     nick: '张三',
//     password: '123456',
//     email: 'asdf@qq.com',
//     submit: 1,
//     solved: 1,
//     regTime: 'String',
//     privilege: 'String'
// }

// //创建用户
// var createUser = new users(user);
// createUser.save((err, doc) => {
//     if (err) console.log('err:' + err);
//     console.log(doc);
// })

// or
// users.create(user, (err, doc) => {
//     if (err) console.log('err:' + err);
//     console.log(doc);
// })



//删除删除所有符合条件的文档
// users.remove({ submit: 1 }, (err, rlt) => {
//     if (err) console.log('err:' + err);
//     console.log(rlt); //{ ok: 1, n: 1 }
// })

// //最多删除一个文件符合条件的文档
// users.deleteOne({ name: 'Eddard Stark' }, function (err) { });

// //最多删除所有符合条件的文档，表现的像remove
// users.deleteMany({ name: /Stark/, submit: { $gte: 18 } }, function (err) { });

//修改
// users.update({ name: 'zhouba' }, { submit: 3 }, (err, rlt) => {
//     if (err) console.log('err:' + err);
//     console.log(rlt);
// })

//批量修改  { multi: true }
// users.update({ name: 'zhouba' }, { nick: '粥吧' }, { multi: true }, function (err, rlt) {
//     if (err) console.log('err:' + err);
//     console.log(rlt);
// })

//查找
// users.find({ name: 'zhouba' }, (err, docs) => {
//     if (err) console.log('err:' + err);
//     console.log(docs);
// })

// //where 条件 .where('age').gte(21).lte(65).where('name', /^b/i)
// users.where('submit').gte(2).exec((err, docs)=> {
//     if (err) console.log('err:' + err);
//     console.log('docs:' + docs);
// })


//Query
// var query = users.find();
// //查询
// query.exec(function (err, docs) {
//     if (err) console.log('err:' + err);
//     console.log(docs);
// })

//or  use promise
// var promise = query.exec();
// promise.then(function (resolve, reject) {
//     if (reject) console.log('err:' + reject);
//     console.log(resolve);
// })

//findById mongoose自带
// users.findById('5ae45b6258d8122414f5498b', function (err, docs) {
//     if (err) console.log('err:' + err);
//     console.log(docs);
// })

//此方法为创建model时注册的静态方法
// users.findByName('wangwu', (err, docs) => {
//     if (err) console.log('err:' + err);
//     console.log(docs);
// })





// module.exports=mongoose;