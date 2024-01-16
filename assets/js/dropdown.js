
function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  dropdownContent.classList.toggle("show");
}

function toggleCard() {
  var accountCard = document.getElementById("accountCard");
  accountCard.classList.toggle("show");
}

function toogleNotification() {
  var notification = document.getElementById("notificationBox");
  notification.classList.toggle("show");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  var dropdowns = document.querySelectorAll(".dropdown-content");
  var accountCard = document.getElementById("accountCard");
  var notification = document.getElementById("notificationBox");
  dropdowns.forEach(function (dropdown) {
    if (
      dropdown.classList.contains("show") &&
      !event.target.closest(".dropdown")
    ) {
      dropdown.classList.remove("show");
    }
  });
  // Close account card if the user clicks outside of it
  if (
    accountCard.classList.contains("show") &&
    !event.target.closest(".account")
  ) {
    accountCard.classList.remove("show");
  }

  // Close notification box if the user clicks outside of it
  if (
    notification.classList.contains("show") &&
    !event.target.closest(".notification")
  ) {
    notification.classList.remove("show");
  }
};
