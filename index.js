document.getElementById("run-button").addEventListener("click", function() {
  const contentElement = document.getElementById("Content");
  contentElement.textContent = "Running...";

  // Simulate project output
  setTimeout(() => {
    contentElement.textContent = "27";
  }, 1000);
});
