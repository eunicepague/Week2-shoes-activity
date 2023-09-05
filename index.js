//for navbar
const toggleButton =
  document.getElementsByClassName(
    "toggle-button"
  )[0];
const navbarLinks =
  document.getElementsByClassName(
    "navbar-links"
  )[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
//for filter items
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const filterButtons =
      document.querySelectorAll(".filter-button");
    const cards =
      document.querySelectorAll(".card");

    filterButtons.forEach((button) => {
      button.addEventListener(
        "click",
        function () {
          const filter = this.getAttribute(
            "data-filter"
          );
          toggleCards(filter);
        }
      );
    });

    function toggleCards(filter) {
      cards.forEach((card) => {
        if (
          filter === "all" ||
          card.classList.contains(filter)
        ) {
          card.style.display = "block"; // Show the card
        } else {
          card.style.display = "none"; // Hide the card
        }
      });

      // Toggle the "hidden" class on key-icons cards
      if (
        filter === "key-icons" &&
        filter === "running-shoes"
      ) {
        const keyIconsCards =
          document.querySelectorAll(
            ".card.key-icons"
          );
        const runningShoesCards =
          document.querySelectorAll(
            ".card.running-shoes"
          );
        keyIconsCards.forEach((card) => {
          card.classList.toggle(
            "hidden",
            filter !== "key-icons"
          );
        });
        runningShoesCards.forEach((card) => {
          card.classList.toggle(
            "hidden",
            filter !== "running-shoes"
          );
        });
      }
    }
  }
);

//for contact form
function validate() {
  var name =
    document.getElementById("name").value;
  var subject =
    document.getElementById("subject").value;
  var phone =
    document.getElementById("phone").value;
  var email =
    document.getElementById("email").value;
  var message =
    document.getElementById("message").value;
  var error_message = document.getElementById(
    "error_message"
  );

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (
    email.indexOf("@") == -1 ||
    email.length < 6
  ) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 140) {
    text =
      "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
