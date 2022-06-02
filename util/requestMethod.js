'use strict';

// library requires
require('../util/common');

//variant
let targetLink = "http://localhost:3000";

module.exports = {
  get: getRequest,
  post: postRequest
};

function request() {
	return supertest(targetLink);
}

function getRequest(path, query, header, token) {
	// var header = {
    // 'Content-Type': 'application/json'
	// };
	header.Connection = 'keep-alive';
	header.Accept = '*/*';
	if (token !== undefined)
    	header.Authorization = token;
    if (path != undefined)
    	return request().get(path)
	    .query(query)
	    .set(header);
    else
	    return request().get(path)
	    .set(header);
}

function postRequest(path, body, token) {
	var header = {
    'Content-Type': 'application/json'
	};
  	if (token !== undefined)
    	header.Authorization = token;

  	if (body === undefined || body === null || Object.keys(body).length === 0 )
    	return request().post(path)
      	.set(header);
  	else
    	return request().post(path)
      	.send(body)
      	.set(header);
}