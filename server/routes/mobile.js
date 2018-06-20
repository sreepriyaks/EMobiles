var app = require('../app');

app.get('/mobile/list', (req, res) => {
    res.status(200).send("Get Mobiles API");
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