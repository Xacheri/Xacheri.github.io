// Set the date we're counting down to
var countDownDate = new Date("July 31, 2027 18:00:00").getTime();

function updateCountdown() {
  var element = document.getElementById("countdown-timer");

  // Stop if the element doesn't exist
  if (element == null) {
    return false;
  }

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // If the countdown is finished
  if (distance < 0) {
    element.innerHTML = "This couple is married! Good luck to the Smiths!";
    return false;
  }

  // Time calculations
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  element.innerHTML =
    "Happily ever after begins in " + days + " days " +
    hours + " hours " +
    minutes + " minutes and " +
    seconds + " seconds";

  return true;
}

// Try to display immediately
updateCountdown();

// Update every second
var x = setInterval(function() {
  if (!updateCountdown()) {
    clearInterval(x);
  }
}, 1000);