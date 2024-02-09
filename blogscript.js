const certificate = document.getElementById('certificate');
    const dropdown = document.querySelector('.dropdown');
     let hoverTimeout; // Variable to store the timeout ID

 
    // Handle mouse hover on the Certifications link
    certificate.addEventListener('mouseover', function() {
      clearTimeout(hoverTimeout); // Clear any existing timeout
      dropdown.style.display = 'block';
    });

    // Handle mouse leave from the Certifications link with a delay
    certificate.addEventListener('mouseleave', function() {
     hoverTimeout = setTimeout(function() {
        dropdown.style.display = 'none';
      }, 500); // Adjust the delay duration (in milliseconds) as needed
    });

    // Handle clicks on dropdown links
    const dropdownLinks = document.querySelectorAll('#certificate .dropdown a');
    dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        console.log('Clicked on:', link.textContent);
        // Add your click event handling logic here
        dropdown.style.display = 'none'; // Close the dropdown after a link is clicked
      });
    });

    gsap.to("#container", {
        scrollTrigger: {
          trigger: "#container",
         // When the container reaches the top
          start: "top top", // Start animation when the container reaches the top of the viewport
          end: "bottom bottom", // End animation when the container reaches the bottom of the viewport
          pin: true, // Pin the container
          pinSpacing: false // Disable pin spacing (optional)
        }
      });
      

      function toggleAnswer(questionId) {   
        var answer = document.getElementById(questionId); 
            if (answer.style.display === 'block') 
            {
                 answer.style.display = 'none';  
               } 
            else {
         answer.style.display = 'block';
         }
     }