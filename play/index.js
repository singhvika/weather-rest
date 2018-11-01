const fs = require('fs');

var lic = fs.readFileSync('./../keys/keys.lic','utf-8', (err, data) => {
    if(err){
        console.log(err);
        throw err;
    }
    return data;
});

console.log(typeof(lic));

