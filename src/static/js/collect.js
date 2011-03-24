/* initialize sets up certain set features of the addtask page such as page 
   title and the default state of the radio button. currently does not work with pagemaker
TODO: integrate with structure
*/
function initialize() {
    document.title = "Add A Task";
    document.getElementById("low").checked=true;
    document.getElementById("NS").checked=true;
}

/* clicked is called by addtask.html when the user attempts to submit their fields.
   It scans the required fields (all but comments) and terminates process if the fields
   are incomplete. If complete, it currently displays a success box and links to the main
   page and creates a task object using Chris's task.js file.
   TODO: use server and link to database 
*/
function clicked(form) {
    for(i = 2; i< 6; i++){
        if(document.getElementById("phrase"+i).value == ""){
            window.alert("Not all required fields are properly filled");
            return;
        }
    }

    if(!document.getElementById("low").checked){
    if(!document.getElementById("medium").checked){
            if(!document.getElementById("high").checked){
        window.alert("Not all required fields are properly filled");
                return;    
            }
    }
    }

    if(!document.getElementById("NS").checked){
    if(!document.getElementById("WiP").checked){
        window.alert("Not all required fields are properly filled");
            return;    
    }
    }    

    var ETR = document.getElementById("phrase4").value;
    var ETL = document.getElementById("phrase5").value;

    if(isNaN(parseFloat(ETR)) || isNaN(parseFloat(ETL))){
        window.alert("Time field entries must be a number");
        return;
    }
    form.submit();
}