'use strict';
require('../util/common');
//requires
let requestMethod = require('../util/requestMethod');
let apiUsers = '/api/partner/crm/token';

describe('Get User Test', function() {
	describe('@smoke', function() {
	    it('should return correct users list elements', Q.async(function*() {
			let query = "{" + '"featureName":"authJWT"' +"}";
			let header =  "{" + '"x-axahk-msgid": "ec3e5b77-9e52-4904-85ec-d1a621ea88d8","apikey": "5Q0hn1jTSh985yHSxvdhtrw762aIOnPhs8Tws5utVVWxii4mvP45iL","Accept-Encoding":"gzip, deflate, br"' + "}";
	    	let res = yield requestMethod.get(apiUsers, JSON.parse(query), JSON.parse(header));

	        expect(res.status, 'Status').eql(200);
	        expect(res.body.page).eq(3);
	        expect(res.body.per_page).eq(6);
	        expect(res.body.total).to.exist;
	        expect(res.body.total_pages).to.exist;

	        res.body.data.forEach(function (element) {
	          expect(element).to.have.property('id');
	          expect(element).to.have.property('first_name');
	          expect(element).to.have.property('last_name');
	          expect(element).to.have.property('avatar');
	        });

	    }));

	    it('should return correct user', Q.async(function*() {
	    	let res = yield requestMethod.get(`${apiUsers}/1`);

	        expect(res.body.data.id).eq(1);
	        expect(res.body.data.first_name).eq("George");
	    	expect(res.body.data.last_name).eq("Bluth");
	    	expect(res.body.data.avatar).eq("https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg");

	    }));

	});
});