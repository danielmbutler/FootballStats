var request = require('request');

var requestData = {
        
    "Home": "Wigan Athletic",
    "Away": "Manchester United"
};

request('',
        { json: true, body: requestData },
        function(err, res, body) {
  // `body` is a js object if request was successful
            console.log(res.body);
});