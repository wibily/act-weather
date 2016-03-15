"use strict";

let app = require('express')();
var request = require('request');

let url = "http://www.bom.gov.au/fwo/IDN60903/IDN60903.94926.json";

app.get('/api/act', (req, resp)=>{
    req.pipe(request(url)).pipe(resp);
});

app.listen(3000);