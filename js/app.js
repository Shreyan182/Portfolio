document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const formData = new FormData(form);

        // Send form data to server using fetch
        fetch('http://127.0.0.1/process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Assuming server sends text response
        })
        .then(data => {
            console.log('Message sent successfully:', data);
            alert('Message sent successfully');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        });
    });
});
