const port = process.env.PORT || 3000;

var app = require('./app');
require('./appService');

app.listen(port, () => {
    console.log(`Server up on ${ port }`);
});
