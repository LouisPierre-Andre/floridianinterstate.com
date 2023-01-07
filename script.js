const menu = document.querySelector('.fa-bars');
const link = document.querySelector('.link-box');
const header = document.querySelector('.header');
const btns = document.querySelector('.btns');
const description = document.querySelector('.description');
const section5 = document.querySelector('#section5');
// const partenaire = document.querySelector('partenair-contact');


// const section1 = document.querySelector('#section1')

menu.addEventListener('click', function () {
    header.classList.toggle('active');
    // section1.classList.toggle('active')
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-xmark');

})







//////////////////////////////////////////////////////////////////////////////////////////////////////
//   the scrolling effect to the pages

header.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
       header.classList.remove('active')
       header.classList.add('scroll')
       menu.classList.toggle('fa-bars');
       menu.classList.toggle('fa-xmark');
   //  }
})


link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
    //    header.classList.remove('active')
    //    header.classList.add('scroll')
    //    menu.classList.toggle('fa-bars');
    //    menu.classList.toggle('fa-xmark');
   //  }
})



description.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
    //    header.classList.remove('active')
    //    header.classList.add('scroll')
    //    menu.classList.toggle('fa-bars');
    //    menu.classList.toggle('fa-xmark');
   //  }
})




btns.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
    //    header.classList.remove('active')
    //    header.classList.add('scroll')
    //    menu.classList.toggle('fa-bars');
    //    menu.classList.toggle('fa-xmark');
   //  }
})





section5.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
    //    header.classList.remove('active')
    //    header.classList.add('scroll')
    //    menu.classList.toggle('fa-bars');
    //    menu.classList.toggle('fa-xmark');
   //  }
})













////////////////////////////////////////////////////////////////////////////////////////////
//  the scroll event to hide the header on scroll up
// let lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop < lastScrollTop) {
//         header.classList.add('scroll')
//     } else {
//         header.classList.remove('scroll');
//     }
//     lastScrollTop  = scrollTop;
    
//     if(window.scrollY < header.offsetHeight + 250) {
//         header.classList.add('scroll')
//     }
// })











function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      object: document.getElementById("object").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_g90yu18";
    const templateID = "template_qdlo5ih";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("object").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
