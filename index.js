const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
// const PORT = process.env.PORT || 3000;

console.log(`NODE_ENV: ${config.NODE_ENV}`);
console.log(`HOST: ${config.HOST}`);
console.log(`USER: ${config.USER}`);
console.log(`DB_NAME: ${config.DB_NAME}`);
console.log(`DB_PASSWORD: ${config.DB_PASSWORD}`);
console.log(`PORT: ${config.PORT}`);

app.use(express.json());
app.use(cors());

const router = require('./routes/router.js');
app.use('/api', router);

app.listen(config.PORT , () => {
  console.log(`Servidor corriendo en el puerto ${config.PORT}.`);
});