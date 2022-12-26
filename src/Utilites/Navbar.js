// Navbar Toggler Function
 export const toggler = ()=>{
    const navLinks = document.querySelector('.nav-links');
    const loginDetails = document.querySelector('.login-details');
    const icon = document.querySelector('.toggler i');
    navLinks.classList.toggle('active');
    loginDetails.classList.toggle('active');
    if(navLinks.classList.contains('active')){
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    }else{
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    }
}