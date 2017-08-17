'use strict';
require('../util/common');
//requires
let requestMethod = require('../util/requestMethod');

describe('Get User Test', function() {
	describe('@smoke', function() {
	    it('should return correct users list elements', Q.async(function*() {
	    	let res = yield requestMethod.get('/users', {
	        	page: 3
	        });

	        expect(res.status, 'Status').eql(200);
	        expect(res.body.page).eq("3");
	        expect(res.body.per_page).eq(3);
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
	    	let res = yield requestMethod.get('/users/1');

	        expect(res.body.data.id).eq(1);
	        expect(res.body.data.first_name).eq("george");
	    	expect(res.body.data.last_name).eq("bluth");
	    	expect(res.body.data.avatar).eq("https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg");

	    }));
	});

	describe('@regression', function() {
	    it('should return correct total page of users list', Q.async(function*() {
	    	var perPage = 4;
	    	let res = yield requestMethod.get('/users', {
	        	page: 3,
	        	per_page: perPage
	        });
	        expect(res.status, 'Status').eql(200);
	        expect(res.body.page).eq("3");
	        expect(res.body.per_page).eq(perPage);
	        expect(res.body.total/perPage).eq(res.body.total_pages);
	        expect(res.body.data).to.have.lengthOf(perPage);
	        
	    }));
	});
});