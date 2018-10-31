const fs = require('fs');
const express = require('express');

const utils = require('./utils/utils.js');

const port = process.env.PORT || 3000;
var server = express();


server.get('/', (req, res) => {
    res.send(
        {
            'name': 'vikas',
            'age':'25' 
        }
    );
})

server.get('/weather', (req, res) => {
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

server.listen(3000, (error)=> {
    if (error)
    {
        console.log(error)
        fs.writeFile('startuplogs.txt', error);

    }
    else{
        console.log(`server @ ${port}`);
    }
});