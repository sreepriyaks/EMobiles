var app = require('../app');
const controller = require('../controllers/mobile.controller');

app.get('/mobile/list', async (req, res) => {
    result = await controller.getAll();
    res.status(result.code).send(result);
});

app.get('/mobile/:id', (req, res) => {
    res.status(200).send("Get Mobile API");
});

app.post('/mobile', (req, res) => {
    res.status(200).send("Add Mobile API");
});

app.put('/mobile/:id', (req, res) => {
    res.status(200).send("Edit Mobile API");
});

app.delete('/mobile/:id', (req, res) => {
    res.status(200).send("Delete Mobile API");
});