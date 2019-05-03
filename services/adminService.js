var mysql      = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : '123456',
    port : 3306, //port mysql
    database:'moviedb',
    connectionLimit: 10,
    supportBigNumbers: true
});

var service = {};
service.getAdmins = function(callback){
  var sql = "SELECT * FROM admin";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback([{}]); return; }
    // make the query
    connection.query(
      sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback([{}]); return; }
      callback(results);
    });
  });
  //return result; //line 24 execute before db reply
};

service.addAdmin = function(admin,callback) {
    pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback("fail"); return; }
    connection.query("INSERT INTO admin set ? ",admin, function(err, results) {
      if(err){
       console.log("Error Selecting : %s ",err );
       callback("fail");
      }else{
       callback("success");
     }
  });
});
};

module.exports = service;