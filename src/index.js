const tooltip = document.getElementById("tooltip")
const shareButton = document.getElementById("share-button")


function toggleShareOptions() {
    tooltip.classList.toggle("hidden")
  }
shareButton.addEventListener("click", toggleShareOptions);

