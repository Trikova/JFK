function selection(){
  var btnbackselection = document.querySelector('#btn-back-selection')
  var btnloginselection = document.querySelector('#btn-login-selection')
  var btnsingupselection = document.querySelector('#btn-singup-selection')
  var btnbacklogin = document.querySelector('#btn-back-login')
  var btnauth =document.querySelector('.btn-auth')


  var btnbacklogin = document.querySelector('#btn-back-login')
  if (btnbackselection) {
    btnbackselection.addEventListener("click", function() {
        window.location.href = '../';
    });
  }

  if (btnauth) {
    btnauth.addEventListener("click", function() {
        window.location.href = '../checkout/info.html';
    });
  }

  if (btnbacklogin) {
    btnbacklogin.addEventListener("click", function() {
        window.location.href = './selection.html';
    });
  }

  if (btnloginselection) {
    btnloginselection.addEventListener("click", function() {
        window.location.href = 'login.html';
    });
  }
  if (btnsingupselection) {
    btnsingupselection.addEventListener("click", function() {
        window.location.href = 'singup.html';
    });
  }
  


}
