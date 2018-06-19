export default (request, response) => {

    const xhr = require('xhr');
        
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';

    const method = request.method.toLowerCase();

    const body = JSON.parse(request.body);
    // Functions for defined 'Routes'.
    // Add functions for each object under HTTP method keys
    let controllers = {
        default: {}
    };

    // Response helpers
    const ok = () => {
        response.status = 200;
        return response.send();
    };

    const unauthorized = () => {
        response.status = 401;
        return response.send();
    };

    const badRequest = () => {
        response.status = 400;
        return response.send();
    };

    const notFound = () => {
        response.status = 404;
        return response.send();
    };

    const serverError = (code, errorToClient) => {
        response.status = code;
        return response.send(errorToClient);
    };

    // default GET request returns 200 OK
    controllers.default.post = () => {
        const url = 'https://api.mlab.com/api/1/databases/diabetes_data/collections/events_food?apiKey=OwcGXJK1gT9szsKgjIi8Jte5TmkEkf7c';
        const http_options = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
             },
            "body": body
        };
                 
        return xhr.fetch(url, http_options).then((x) => {
            const body = JSON.parse(x.body);
            console.log(body);
            return response.send(body);
        });
             
    };


    return controllers['default'][method]();
};