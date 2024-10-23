const tooltip = document.getElementById("tooltip")
const shareButton = document.getElementById("share-button")
const shareButtonMobile = document.getElementById("share-button-mobile")

function toggleShareOptions() {
    tooltip.classList.toggle("hidden")
  }
shareButton.addEventListener("click", toggleShareOptions);
shareButtonMobile.addEventListener("click", toggleShareOptions)

