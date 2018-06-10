//establishing a function for the start button.

$(document).ready(function() {

   var startBtn = "<h2>Testing...</h2>";

   function initialize () {
    $("#game").append(startBtn);
}
    
    $("#startBtn").click(function() {
        initialize();
    });
   
})