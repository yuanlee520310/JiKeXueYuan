var redis=require('redis');

var client=redis.createClient(6379,'localhost');

client.set('A','aa');

client.get('A', function (err, v) {
    console.log(v);
});