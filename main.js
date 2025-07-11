
  var typed = new Typed(".text", {
    strings: ["FrontEnd Developer","custom Design","Rebuild Design",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

emailjs.init('your_user_id');  // Replace 'your_user_id' with the actual User ID you get from EmailJS

        // Listen for form submission
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect the form data
            var formData = new FormData(event.target);

            // Send the email using EmailJS
            emailjs.sendForm('your_service_id', 'your_template_id', formData)  // Replace 'your_service_id' and 'your_template_id' with actual values
                .then(function (response) {
                    // Success message
                    alert('Your message has been sent successfully!');
                }, function (error) {
                    // Error message
                    alert('Error in sending message: ' + JSON.stringify(error));
                });
        });