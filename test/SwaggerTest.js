'use strict';
require('../util/common');
//requires
let requestMethod = require('../util/requestMethod');
let responseBody = require('../util/responseBody');
let apiUsers = '/users';
let data = {endpoint: JSON.parse(swagger)['item']};
let response = { mode: 'raw', raw: 'abc' };

describe('Check swagger', function() {
	describe('@smoke', function() {
	    it('should return correct users list elements', Q.async(function*() {
            let content = "Current User";
            //console.log(data);
	    	console.log(jsonDiff.diff(jsonQuery('endpoint[name=Auth].item[name='+content+'].request.body',{data: data}).value,response, {keysOnly: true} ));
	    }));

	});
});