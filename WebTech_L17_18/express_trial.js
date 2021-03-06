/* let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server running on port 3000!'));

// app.get('/:name', (req, res) => {
    //     res.send('Your name is ' + req.params.name + '\n');
    // });
    
    app.use(express.json());
    app.post('/', (req, res) => {
        res.json(req.body);
    }); */

let express = require('express');
let app = express();
app.listen(3000, () => console.log('Server running on port 3000!'));
let MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

app.post('/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        dbo.collection("customers").insertOne({
            name: req.body.name,
            age: req.body.age
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});