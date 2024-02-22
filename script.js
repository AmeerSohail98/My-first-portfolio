/* nav bar transparent and displaying*/
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
/*toggle icon nav bar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => { menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');}

/*remove toggle icon and navbar when click navbar is available*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

/*----contact form javascript-----*/
function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_wmxksu3","template_joojnw5", parms).then(alert("Email sent!!"))
}