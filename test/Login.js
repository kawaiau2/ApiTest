'use strict';
require('../util/common');
//requires
let requestMethod = require('../util/requestMethod');
let apiLogin = '/login';

describe('Login Test', function() {
	describe('@smoke', function() {
	    it('should login successfully', Q.async(function*() {
	    	let res = yield requestMethod.post(apiLogin, {
	        	email: "peter@klaven",
	        	password: "cityslicka"
	        });

	        expect(res.status, 'Status').eql(200);
	        expect(res.body.token).to.exist;

	    }));

	});

	describe('@regression', function() {
	    it('should login unsuccessfully without email', Q.async(function*() {
	    	let res = yield requestMethod.post(apiLogin, {
	        	password: "cityslicka"
	        });

	        expect(res.status, 'Status').eql(400);
	        expect(res.body.error).eq("Missing email or username");

	    }));

	    it('should login unsuccessfully without passowrd', Q.async(function*() {
	    	let res = yield requestMethod.post(apiLogin, {
	        	email: "peter@klaven"
	        });

	        expect(res.status, 'Status').eql(400);
	        expect(res.body.error).eq("Missing password");

	    }));

	    it('should login unsuccessfully with wrong invalid Credentials', Q.async(function*() {
	    	let res = yield requestMethod.post(apiLogin, {
	        	email: "wrongusername",
	        	password: "cityslicka"
	        });

	        expect(res.status, 'Status').eql(400);
	        expect(res.body.error).eq("Invalid Credentials");

	    }));
	});
});