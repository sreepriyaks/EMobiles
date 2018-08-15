var app = require('../app');
const controller = require('../controllers/mobile.controller');

app.get('/mobile/list', async (req, res) => {
  result = await controller.getAll();
  res.status(result.code).send(result);
});

app.get('/mobile/:id', async (req, res) => {
  result = await controller.get(req.params.id);
  res.status(result.code).send(result);
});

app.post('/mobile', async (req, res) => {
  result = await controller.add(req.body);
  res.status(result.code).send(result.message);
});

app.put('/mobile/:id', async (req, res) => {
  result = await controller.edit(req.params.id, req.body);
  res.status(result.code).send(result.message);
});

app.delete('/mobile/:id', async (req, res) => {
  result = await controller.remove(req.params.id);
  res.status(result.code).send(result.message);
});
