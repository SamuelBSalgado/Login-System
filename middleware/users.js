const jwt = require('jsonwebtoken');

module.exports = {
  validateRegister: (req, res, next) => {
    //username min length 3
    if (!req.body.username || req.body.username.length < 3){
      return res.status(400).send({
        msg: 'Porfavor escriba su nombre de usuario con minimo 3 caracteres.'
      });
    }
    //password min 6 chars
    if (!req.body.password || req.body.password.length < 6){
      return res.status(400).send({
        msg: 'Porfavor escriba su contraseña con minimo 6 caracteres.'
      });
    }
    //password (repeat) does not match
    if (!req.body.password_repeat || req.body.password != req.body.password_repeat){
      return res.status(400).send({
        msg: 'Ambas contraseñas deben coincidir.'
      });
    }

    next();
  },
  isLoggedIn: (req, res, next) => {
    try{
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token,'SECRETKEY');
      req.userData = decoded;
      next();
    } catch (err){
      return res.status(401).send({
        msg: 'Tu sesion no es valida.'
      });
    }
  }
}