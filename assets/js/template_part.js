// header part

function loadHeader() {
  fetch("/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header-part").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
}

// Load the header when the DOM is fully load3
document.addEventListener("DOMContentLoaded", loadHeader);

// function loadHeaderBar() {
//   fetch("/header-bar.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("header-bar").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading header:", error));
// }

// // Load the header when the DOM is fully load3
// document.addEventListener("DOMContentLoaded", loadHeaderBar);

// footer part
function loadFooter() {
  fetch("/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-part").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Load the footer when the DOM is fully load3
document.addEventListener("DOMContentLoaded", loadFooter);

// function loadAboveFooter() {
//   fetch("/above-footer.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("four-card").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading footer:", error));
// }

// // Check for the element and call the function if it exists
// document.addEventListener("DOMContentLoaded", () => {
//   // Call loadAboveFooter only if the element with ID 'four-card' exists
//   if (document.getElementById("four-card")) {
//     loadAboveFooter();
//   }
// });