const links = document.querySelectorAll("a.nav-link");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    links.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// for nav functioning
const navlinks = document.querySelectorAll(".navbar a");
const contentDivs = document.querySelectorAll(".content");

navlinks.forEach((link, index) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    contentDivs.forEach((div) => {
      div.style.display = "none";
      div.classList.add("active");
    });
    contentDivs[index].style.display = "flex";
  });
});

//sent button
const sentBtn = document.querySelector(".sentBtn");
sentBtn.addEventListener("click", function () {
  sentBtn.innerHTML = "SENT";
  setTimeout(function () {
    sentBtn.innerHTML = "SEND";
  }, 2000);
});
