export default (request) => { 
    const kvstore = require('kvstore');
    const xhr = require('xhr');
    
    var current_bg = request.message.entries[0].sgv;
    return kvstore.get("last_100_entries").then((last_100_entries_new) => {
        last_100_entries_new = ""; 
        if (!last_100_entries) {
            last_100_entries_new = last_100_entries;
        }
        last_100_entries_new += bg + ",";
        
        kvstore.set("last_100_entries", last_100_entries_new).catch(

                
        );

        console.log(last_100_entries_new);
        request.message.eon = {'bg': current_bg, 'trend':  request.message.entries[0].trend, 'x': request.message.entries[0].date};
        return request.ok(); // Return a promise when you're done         
    });

//    

    
}