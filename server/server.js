let http = require('http');
let app = require('express')();
//http://www.bom.gov.au/fwo/IDN60903/IDN60903.94926.json

app.get('/api/act', (req, resp)=>{
    let options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    resp.

});

app.listen(3000);