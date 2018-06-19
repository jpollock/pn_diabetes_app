export default (request) => { 
    const kvstore = require('kvstore');
    const xhr = require('xhr');
    request.message.eon = {'bg': request.message.entries[0].sgv, 'trend':  request.message.entries[0].trend, 'x': request.message.entries[0].date};
    //console.log('request',request.message.entries[0].sgv); // Log the request envelope passed 
    //request.eon = 
    //console.log('request',request["entries"][0]); // Log the request envelope passed 
    return request.ok(); // Return a promise when you're done 
}