const firebaseConfig = {
    apiKey: "AIzaSyC_38k6UXR8wpVDj9ZKzlD4f0VeY9VpxiQ",
    authDomain: "calai-form.firebaseapp.com",
    databaseURL: "https://calai-form-default-rtdb.firebaseio.com",
    projectId: "calai-form",
    storageBucket: "calai-form.appspot.com",
    messagingSenderId: "1059971350900",
    appId: "1:1059971350900:web:94b45125274aa897d9ec21",
    measurementId: "G-MFR40JCS2S"
  };
  firebase.initializeApp(firebaseConfig);

  var registertFormDB = firebase.database().ref("registerForm");



const navmenuToggler = document.querySelector("#menu-line");
navmenuToggler.addEventListener("click",() => {
    console.log("CLick");
    document.querySelector(".nav-menu").classList.toggle("show")
    })

     const form=document.querySelector('form')
//   const name=document.querySelector('#name')
//      const email=document.querySelector('#f-email')
//      const country=document.querySelector('#Country')
//      const phoneNumber=document.querySelector('#phoneNumber')
//      const course=document.querySelector('#Course')

    form.addEventListener('submit',function(e){
e.preventDefault();
var name = getElementVal("name");
var email = getElementVal("f-email")
var country = getElementVal("Country")
var phoneNumber = getElementVal("phoneNumber")
var course=getElementVal("Course")

saveForm(name,email,country,phoneNumber,course)

console.log(name,email,country,phoneNumber,course);
form.reset()
    })


    const saveForm = (name,email,country,phoneNumber,course) =>{
        var newregisterForm = registertFormDB.push();

        newregisterForm.set({
            name:name,
            emailId:email,
            Country:country,
            PhoneNumber:phoneNumber,
            Course:course,
        })
    }
    const getElementVal = (id) => {
        return document.getElementById(id).value;
      };
    

