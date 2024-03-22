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
  <label for="name">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="tel" class="form-control" id="mobile" name="mobile" placeholder="+91 99999 99999" required>
  <label for="mobile">Mobile Number</label>
</div>
<div class="form-floating">
              <div class="form-floating mb-3">
  <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" required>
  <label for="email">Email address</label>
</div>
<div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" name="message" style="height: 100px"></textarea>
                                    <label for="message">Message</label>
                                </div>
<div class="d-flex justify-content-end mt-3">
<button class="w-auto rounded-3 btn btn-primary w-100 px-5" id="contact-form-button" data-bs-dismiss="modal" aria-label="Close">Submit</button>
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

// Function to check if the modal should be shown
function checkModal() {
  var showModal = localStorage.getItem("showModal");

  // If showModal is null or false, show the modal and set the flag to true
  if (!showModal) {
    // setTimeout(addModal, 10000); // Show modal after 10 seconds
    // $("#myForm").submit(function (event) {
    //   handleSubmit(event);
    // });
    setTimeout(function () {
      addModal();
      $("#myForm").submit(function (event) {
        handleSubmit(event);
      });
    }, 10000);
    localStorage.setItem("showModal", true);
  }
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
