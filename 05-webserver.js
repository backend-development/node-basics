const 
  express = require('express'),
  port = 8081;


const app = express();

app.use(express.static('public'));
app.get('/world', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

