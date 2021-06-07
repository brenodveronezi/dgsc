const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dgsc',
  password: '123@qwe',
  port: 5432,
})


/*
pool.on('connect', (err) => {
  if(err){
    console.log(err)
  }else
    console.log('Conectado ao bd')
})

pool.on('end', (err) => {
  if(err){
    console.log(err)
  }else{
    console.log('Desconectado do bd')
  }
})
*/
/*
module.exports = {
  query: (text, params) => pool.query(text, params),
  end: (text, params) => pool.end(text, params),
  connect: (text, params) => client.connect(text, params),

  //return conn;
};
*/

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },

  connect: (text, params, callback) => {
    return pool.connect(text, params, callback)
  },
}
