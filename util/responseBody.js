'use strict';

// library requires
require('../util/common');

module.exports = {
    assertSchema: assertSchemaSwagger,
    assertBody: assertJson
  };

function assertSchemaSwagger (requestName, responseName, responseBody) {

    return jsonDiff.diffString(jsonQuery('[name=' + responseName + '].body', {data:jsonQuery('item[name=' + requestName + '].response',{data: swagger}).value}).value, responseBody, {keysOnly: true});

}

function assertJson () {

}