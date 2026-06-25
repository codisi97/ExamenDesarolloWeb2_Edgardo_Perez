const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'graficos',
    'root',
    'R00tP4ssw0rd',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    }
   
);

sequelize.authenticate()
  .then(() => {
    console.log('conexion establecida correctamente');
  })
  .catch((err) => {
    console.log('error de conexion', err);
  });

module.exports = sequelize;