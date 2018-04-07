var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var appRoutes = require('./routes/app');
var analysisRoutes = require('./routes/analysis');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.post('/api/addRest', (req, res, next) => 
//     console.log(req.body));

app.use('/api/analysis', analysisRoutes);
app.use('/api', appRoutes);

app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`)
);
