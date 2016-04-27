const 
  express = require('express'),
  app = express(),
  port = 8081;



app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

