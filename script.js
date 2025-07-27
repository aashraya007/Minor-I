
 
 
            const newsletterForm = document.getElementById('newsletterForm');
            const newsletterMessage = document.getElementById('newsletterMessage');
            
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('newsletterEmail').value;
                
                // Simple validation
                if (!validateEmail(email)) {
                    newsletterMessage.textContent = 'Please enter a valid email address';
                    newsletterMessage.className = 'message error';
                    return;
                }
                
                newsletterMessage.textContent = 'Thank you for subscribing! Check your email for confirmation.';
                newsletterMessage.className = 'message success';
                newsletterForm.reset();
                
                // Reset message after 5 seconds
                setTimeout(() => {
                    newsletterMessage.className = 'message';
                    newsletterMessage.textContent = '';
                }, 5000);
            });
            
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
    