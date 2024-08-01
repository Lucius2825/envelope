$(document).ready(function() {
    $(".container").mouseenter(function() {
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: 0
        }, "slow", function() {
            // Show the message and start the countdown
            showMessageAndCountdown();
        });
    });
    
    function showMessageAndCountdown() {
        $("#messageBox").removeClass("hidden");
        
        var countdown = 5;  // Start countdown from 5
        var countdownElement = $("#countdown");
        countdownElement.text(countdown);
        
        var interval = setInterval(function() {
            countdown--;
            if (countdown >= 1) {
                countdownElement.text(countdown);
            } else {
                clearInterval(interval);
                window.location.href = "flowerindex.html"; // Redirect to another page
            }
        }, 1000);
    }
});