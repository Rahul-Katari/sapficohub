const headerHTML = `<div class="border-bottom text-white py-3 pe-md-4 pe-3 px-3 ps-md-0 top-navbar">
        <div class="d-flex justify-content-between align-items-center gap-3">

            <!-- Left Section -->
            <div class="d-flex align-items-md-center gap-4 px-sm-4 px-lg-5 flex-md-row flex-column">
                <a href="https://maps.app.goo.gl/LAhZpv8omu58pLy79" target="_blank"
                    class="d-md-flex d-none align-items-center"><i
                        class="fa fa-map-marker-alt me-3 text-primary fs-3"></i>
                    <div> #60C, 2nd Floor, Near Arjun Theater, <br>
                        Western Hills, KPHB Hyderabad-72</div>
                </a>


                <!-- Contact Number -->
                <div class="d-flex align-items-center">
                    <i class="fas fa-phone-alt me-1 text-primary fs-4 me-2"></i>
                    <div>
                        <a class="d-flex align-items-center" href="tel:9395191219">
                            <span class="fw-bold">+91 9395191219</span>
                        </a>
                        <a class="d-flex align-items-center" href="tel:7022170619">
                            <span class="fw-bold">+91 7022170619</span>
                        </a>
                    </div>
                </div>
            </div>


            <!-- Right Section (Social Icons) -->
            <div class="d-flex align-items-center">
                <!-- Social Icons -->
                <div class="d-flex gap-md-4 gap-2 social-icons">
                    <a href="https://wa.me/9395191219" class=""><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.facebook.com/sapficotrainingandplacementinhyderabad" target="_blank" class=""><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/99382837/admin/dashboard/" target="_blank" class=""><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/sapfico_hub/" target="_blank" class=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>`
document.getElementById('topHeader').innerHTML = headerHTML;
