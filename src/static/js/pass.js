/* 
   TODO: Search via name as well
*/
function looking() {

    if(document.getElementById("phrase2").value == ""){
        window.alert("Please Enter the email you want");
    }
    else {
	document.location="/sendPwd?p1="+ document.getElementById("phrase2").value;
    }
}
