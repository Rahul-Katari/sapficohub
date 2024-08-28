window.onload = function () {
  checkModal();
  //  to redirect users to the new URL after a delay
  const currenturl = window.location.href;
  if (currenturl.includes("about")) {
    window.location.href = "/advanced-sap-fico-training-hyderabad.html";
  }
};

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").removeClass("d-none");
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(document).ready(function () {
    $(".back-to-top").addClass("d-none");
    console.log("working");
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 15000,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// Function to dynamically add the modal HTML to the document body
function addModal() {
  var modalHTML = `
      <div class="modal fade" id="enquire-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Enquire Now</h5>
            </div>
            <div class="modal-body">
            <form id="enquire-modal-form" action="https://formspree.io/f/mgeqelyl"
            method="POST">
              <div class="form-floating mb-3">
  <input type="text" class="form-control" id="name" name="name" placeholder="Bat Man" required>
  <label for="name">Name*</label>
</div>
<div class="form-floating mb-3">
  <input type="tel" class="form-control" id="mobile" name="mobile" placeholder="+91 99999 99999" required oninput="validateMobileNumber(this)">
  <label for="mobile">Mobile Number*</label>
</div>
<div class="form-floating">
              <div class="form-floating mb-3">
  <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" required>
  <label for="email">Email address*</label>
</div>
<div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" name="message" style="height: 100px"></textarea>
                                    <label for="message">Message</label>
                                </div>
                            <p id="enquire-form-status" class="text-danger"></p>
<div class="d-flex justify-content-end mt-3">
<button class="w-auto rounded-3 btn btn-primary w-100 px-5" id="enquire-form-button" aria-label="Close">Submit</button>
</div>
</div>
            </div>
          </div>
        </div>
      </div>
    `;

  // Add the modal HTML to the document body
  $("body").append(modalHTML);

  // Trigger the modal to show
  $("#enquire-modal").modal("show");
}

function validateMobileNumber(input) {
  const value = input.value;
  // Remove non-digit characters and limit to 10 digits
  input.value = value.replace(/\D/g, '').slice(0, 10);
}

// Function to check if the modal should be shown
function checkModal() {
  var showModal = localStorage.getItem("showModal");

  // If showModal is null or false, show the modal and set the flag to true
  if (!showModal) {
    setTimeout(function () {
      addModal();
      $("#enquire-modal-form").submit(function (event) {
        handleSubmit(event);
      });
    }, 10000);
  }

  async function handleSubmit(event) {
    let form = document.getElementById("enquire-modal-form");
    event.preventDefault();
    var status = document.getElementById("enquire-form-status");
    var submit = document.getElementById("enquire-form-button");
    submit.setAttribute("disabled", true);
    submit.innerHTML = '...';
    var data = new FormData(event.target);
    let mobile = data.get('mobile');
    if (mobile.length === 10 && ["9", "8", '7', '6'].some(num => mobile.startsWith(num))) {
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
          submit.removeAttribute('disabled');
          submit.innerHTML = 'Submit';
          window.alert('Thank you for your Submission');
          $("#enquire-modal").modal("hide");
          localStorage.setItem("showModal", true);
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    else {
      status.innerHTML = "Oops! Please Enter a Valid Mobile Number"
      submit.removeAttribute('disabled');
      submit.innerHTML = 'Submit';
    }
  }
  // form.addEventListener("submit", handleSubmit)
}
// Function to handle form submission
function handleSubmit(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Submit the form
  $("#enquire-modal-form").submit();
  $("#enquire-modal").modal("hide");

  // Optionally, disable the submit button to prevent multiple submissions
  // $('#submitButton').prop('disabled', true);
}

// function to load js files 
function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = function() {
    console.log(url + 'has been loaded');
  }
  document.body.appendChild(script);
}

// list of files 
const scriptsToLoad = [
  'js/footer.js'
]

// load scripts after dom is loaded 
document.addEventListener('DOMContentLoaded', function(){
  scriptsToLoad.forEach(loadScript)
})