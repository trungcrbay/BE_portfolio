const crypto = require('crypto');

const key1 = crypto.randomBytes(32).toString('hex'); 
const key2 = crypto.randomBytes(32).toString('hex'); 

//1 key cho access token
//1 key cho refresh token
console.table({key1,key2})