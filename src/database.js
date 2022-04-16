const mysql =require(mysql)

mysql.createPool({
    host:'127.0.0.1',
    port:'3307',
    user:'root',
    password:'credihome',
    database:'sistema_xpto'
})
