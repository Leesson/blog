/**
 * @author bh-lay
 */
var parse = require('../core/parse.js');
 
exports.render = function (connect,app){
	if(connect.request.method != 'POST'){
		connect.write('json',{
			'code' : 201,
			'msg' : 'please use POST to clear cache !'
		});
		return;
	}
	//FIXME add power check
	parse.request(connect.request,function(err,data){
		var typeStr = data.type || '';
        app.cache.clear(typeStr,function(){
            connect.write('json',{
                'code': 200,
                'msg' : 'clear cache :[' + typeStr + '] completely !'
            });
        });
	});
}
