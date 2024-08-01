$(document).ready(function() {
    $(".container").mouseenter(function() {
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");

        // Delay for 3 seconds before starting the countdown and showing the message box
        setTimeout(function() {
            $(".card").stop().animate({
                top: "0"
            }, "slow", function() {
                // Show the message box and start the countdown
                showMessageAndCountdown();
            });
        }, 2000); // 3000ms delay for 3 seconds
    });

    function showMessageAndCountdown() {
        $("#messageBox").removeClass("hidden");
        
        var countdown = 3;  // Start countdown from 5
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