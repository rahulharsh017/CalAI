// const firebaseConfig = {
//     apiKey: "AIzaSyC_38k6UXR8wpVDj9ZKzlD4f0VeY9VpxiQ",
//     authDomain: "calai-form.firebaseapp.com",
//     databaseURL: "https://calai-form-default-rtdb.firebaseio.com",
//     projectId: "calai-form",
//     storageBucket: "calai-form.appspot.com",
//     messagingSenderId: "1059971350900",
//     appId: "1:1059971350900:web:94b45125274aa897d9ec21",
//     measurementId: "G-MFR40JCS2S"
//   };
//   firebase.initializeApp(firebaseConfig);

//   var registertFormDB = firebase.database().ref("registerForm");



const navmenuToggler = document.querySelector("#menu-line");
navmenuToggler.addEventListener("click",() => {
    console.log("CLick");
    document.querySelector(".nav-menu").classList.toggle("show")
    })

// const q = document.querySelector(".question")
// q.addEventListener("click",(e)=>{
//     document.querySelector(".answer").style.display="block"
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






   




