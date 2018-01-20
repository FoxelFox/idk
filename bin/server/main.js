let express = require('express');
let app = express();
let http = require('http').Server(app);
let compression = require('compression');
app.use(compression());
app.use(express.static(__dirname + '/../client'));
http.listen(3000, function () {
    console.log('listening on *:3000');
});
