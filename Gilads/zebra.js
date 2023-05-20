// Set the date we're counting down to
var countDownDate = new Date("May 20, 2023 20:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with corresponding IDs
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Countdown Expired";
    }
}, 1000);

// Format time to include leading zeros if needed
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
