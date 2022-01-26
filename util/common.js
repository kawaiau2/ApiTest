'use strict';
//library
global.chai = require("chai");
global.expect = global.chai.expect;
global.assert = global.chai.asswrt;
global.Q = require('q');
global.supertest = require('supertest');
global.jsonDiff = require('json-diff');
global.fs = require('fs');
global.path = require('path');
global.jsonQuery = require('json-query');
global.swagger = global.fs.readFileSync(path.resolve(__dirname,'../swagger.json')).toString();

// fs.readFile(path.resolve(__dirname,'../swagger.json'), 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     global.swagger = data;
// });