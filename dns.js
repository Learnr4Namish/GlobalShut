var dns = require('dns');
var w3 = dns.lookup('google.com', function (err, addresses, family) {
  console.log(addresses);
});