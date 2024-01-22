let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
}

var swiper = new Swiper(".review-slider",{
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay:{
    delay: 7500,
    disableOnInteraction: false,
},
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
})


function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        number : document.getElementById("number").value, 
        message : document.getElementById("message").value   
  }
  emailjs.send("service_5xf12c7", "template_csbghy3", params).then(function (res){
    alert("Success! " + res.status)
  })
}