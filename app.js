const express = require('express');
const app = express();
var Twit = require('twit');

var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'Du5RjeO7k4BCmi0sOhrtQFnec',
  consumer_secret:      'OvsjApsntOv5WvLEFIcvkEFHZZLzXbXpBvqSxbqOKhKXzhNTkc',
  access_token:         '81250329-FGNkU22Et4ZGMWb78QnolV8t3R2kSkgDP7mCFuNbr',
  access_token_secret:  'rLdCI5UkN5hikzRLlYdXuXEXuoELP4dfdn5QZ71tXtEI8',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

app.get('/', (req, res)=>{
    T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
      });
});

app.listen(3000)