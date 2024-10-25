$(document).ready(function () {
    checkModal();
});
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
              <form id="enquire-modal-form">
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
function emailInit() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "idzfvJAMIeiqosu-S",
    });
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
        emailInit();
        let form = document.getElementById("enquire-modal-form");
        event.preventDefault();
        var status = document.getElementById("enquire-form-status");
        var submit = document.getElementById("enquire-form-button");
        submit.setAttribute("disabled", true);
        submit.innerHTML = '...';
        var data = new FormData(event.target);
        let mobile = data.get('mobile');
        if (mobile.length === 10 && ["9", "8", '7', '6'].some(num => mobile.startsWith(num))) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_kts49gp', 'template_sbvcain', this)
                    .then((response) => {
                        window.alert("Form Submitted Successfully");
                        form.reset();
                        submit.removeAttribute('disabled');
                        submit.innerHTML = 'Submit';
                        $("#enquire-modal").modal("hide");
                        localStorage.setItem("showModal", true);
                    }, (error) => {
                        window.alert('Form Submission error', error);
                    });
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