const occupationElement = document.getElementById("occupation");
const occupations = ["Software Engineer", "Full Stack Web Developer", "Freelancer"];
const colors = ["white", "yellow", "lime"];
let currentIndex = 0;
const speed = 100; // Adjust typing speed (in milliseconds)
let currentOccupation = occupations[currentIndex]; // Move this line outside the typeWriter function

function typeWriter() {
  let i = 0;

  function type() {
    if (i < currentOccupation.length) {
      occupationElement.innerHTML = currentOccupation.substring(0, i + 1);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, speed * 3); // Wait before erasing the text
    }
  }

  function erase() {
    if (i > 0) {
      occupationElement.innerHTML = currentOccupation.substring(0, i - 1);
      i--;
      setTimeout(erase, speed / 2);
    } else {
      currentIndex = (currentIndex + 1) % occupations.length; // Move to the next occupation
      currentOccupation = occupations[currentIndex]; // Update current occupation
      occupationElement.style.color = colors[currentIndex]; // Change text color based on the current index
      setTimeout(type, speed / 2); // Start typing the next occupation
    }
  }

  occupationElement.style.color = colors[currentIndex]; // Apply initial color
  type();
}

typeWriter();




