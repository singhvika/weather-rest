const fs = require('fs');


const getLicense = function(){
    let lic;
    try {
        lic = JSON.parse(fs.readFileSync('./keys/keys.lic'));
    } catch (error) {
        console.log(error);
        lic = {};
    }
    return lic;
}

const lic = getLicense();

module.exports = {
    keys: lic
}