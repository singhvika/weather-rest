const fs = require('fs');
const express = require('express');

const utils = require('./utils/utils.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname    +   '/public'));

var server = express();



server.get('/', (req, res) => {
    res.send(
        {
            'name': 'vikas',
            'age':'25' 
        }
    );
})

server.get('/weather/json', (req, res) => {
    const address = req.query.address;
    if (!address)
    {
        res.send(`please provide address`);
    }
    
    utils.getCoords(address).then((location) => {
        return utils.getWeather(location);
    }).then((weather) => {
        res.send(weather);
    }).catch((err) => {
        console.log(err);
        fs.appendFile('server.log', err);
        res.send({});
    })
})

server.listen(port, (error)=> {
    if (error)
    {
        console.log(error)
        fs.writeFile('startuplogs.txt', error);

    }
    else{
        console.log(`server @ ${port}`);
        console.log(`geocode key: ${utils.geocode_key}`);
        console.log(`darksky key: ${utils.darksky_key}`);
    }
});