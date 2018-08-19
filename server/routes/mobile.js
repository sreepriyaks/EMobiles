var app = require('../app');
const { mobileController, authController } = require('../controllers');

app.get('/mobile/list', async (req, res) => {
  result = await mobileController.getAll();
  res.status(result.code).send(result);
});

app.get('/mobile/:id', async (req, res) => {
  result = await mobileController.get(req.params.id);
  res.status(result.code).send(result);
});

app.post('/mobile', authController.verifyToken, async (req, res, next) => {
  result = await mobileController.add(req.body);
  res.status(result.code).send(result.message);
});

app.put('/mobile/:id', authController.verifyToken, async (req, res) => {
  result = await mobileController.edit(req.params.id, req.body);
  res.status(result.code).send(result.message);
});

app.delete('/mobile/:id', authController.verifyToken, async (req, res) => {
  result = await mobileController.remove(req.params.id);
  res.status(result.code).send(result.message);
});
