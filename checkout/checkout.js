function checkout (){
btnpayment = document.querySelector('#btnpayment')
btnpagar =document.querySelector('#btnpagar')
btnback =document.querySelector('#btnback')
  if (btnpayment) {
    btnpayment.addEventListener("click", function() {
        window.location.href = './payment.html';
    });
  }  

  if (btnpagar) {
    btnpagar.addEventListener("click", function() {
        window.location.href = './thanks.html';
    });
  }  

  if (btnback) {
    btnback.addEventListener("click", function() {
        window.location.href = './info.html';
    });
  }  
}