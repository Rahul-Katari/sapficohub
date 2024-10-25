// Function to fetch testimonials from the JSON file and render them
async function loadTestimonials() {
    try {
        const response = await fetch('testimonials.json'); // Fetch the JSON file
        const testimonials = await response.json();        // Parse the JSON data

        const testimonialsSection = $('#testimonial-carousel'); // Get the testimonials section

        testimonials.forEach(testimonial => {
            // Create a testimonial card for each entry
            const testimonialCard = `
            <div class="testimonial-item text-center">
                    <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg"
                        alt="SAP Fico training online hyderabad" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">${testimonial.name}</h5>
                    <p>${testimonial.designation}</p>
                    <div class="testimonial-text bg-light text-center p-4">
                        <p class="mb-0">${testimonial.testimonial}</p>
                    </div>
                </div>
        `;
            // Append the testimonial card to the section
            testimonialsSection.trigger('add.owl.carousel', [$(testimonialCard)]);
        });
        testimonialsSection.trigger('refresh.owl.carousel');
    } catch (error) {
        console.error("Error loading testimonials:", error);
    }
}
// Call the function to load testimonials when the page loads
loadTestimonials();
