
/*
signinRequest.js takes a request from static/signin.html and sets the cookies
for the user and logs them in.
*/

var db = require('SQLiteHelper');
var querystring = require('querystring');


exports.postReq = function(request, response){

	//rawData will take the 'data' event data
    var rawData = '';
    request.on('data', function(data){
        rawData += data;
    });

	//queryFields will take the parsed query data from rawData once
    //    the 'end' event signals that the data is completely sent.
    var queryFields = {};
	request.on('end', function(){
        queryFields = queryString.parse(rawData);

        //if(db.userExists(queryFields.identityIn, function(){})){
            
        //}else if(db.nickExists(queryFields.identityIn, function(){})){

        //}
    });


}



















