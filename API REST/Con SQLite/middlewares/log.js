function log(req, res, next) {
  console.log('Ruta: ' + req.baseUrl + req.path, 'Método: ' + req.method);
  next();
}

module.exports = log;