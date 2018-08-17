var app = require('../app');
const controller = require('../controllers/admin.controller');

app.post('/admin', async (req, res) => {
  result = await controller.create(req.body);
  res.status(result.code).send(result);
});

app.post('/admin/login', async (req, res) => {
  result = await controller.login(req.body);
  res.status(result.code).send(result);
});
