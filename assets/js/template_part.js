function loadHTMLPart(url, elementId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const el = document.getElementById(elementId);
      if (el) {
        el.innerHTML = data;
      } else {
        console.warn(`Element with ID "${elementId}" not found`);
      }
    })
    .catch((error) => console.error(error));
}

// Load header and footer when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadHTMLPart("/header.html", "header-part");
  loadHTMLPart("/footer.html", "footer-part");
});
