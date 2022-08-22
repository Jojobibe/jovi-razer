AOS.init();

let dropdowns = document.querySelectorAll(".dropdown-toggle");
dropdowns.forEach((dd) => {
  dd.addEventListener("mouseover", function (e) {
    var el = this.nextElementSibling;
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
});

// const swiper = new Swiper('.swiper', {
// freeMode: true,
// });

const swiper = new Swiper(".swiper", {
  freeMode: false,
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// NAVBAR

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// contact

function validate() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

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
  if (isNaN(phone) || phone.length != 11) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 5) {
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

//MORE ITEMS

const moreItems = document.querySelector("#show");
const items = document.querySelector(".show");

moreItems.addEventListener("click", (e) => {
  items.classList.toggle("show-more");

  if (moreItems.innerHTML === "VIEW ALL PRODUCTS") {
    moreItems.innerHTML = "CLOSE";
  } else {
    moreItems.innerHTML = "VIEW ALL PRODUCTS";
  }
});
