let express = require('express');

let port = process.env.PORT || 8080;

let app = express();

let router = express.Router({});

router.get('/', function(req, res) {
    res.send('Hello there!')
});

app.use(router);

app.listen(port, function() {
    console.log('Now listening on ' + port);
});