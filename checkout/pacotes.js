function verificarEstado() {
  var estado = localStorage.getItem("estado");  // Carrega o valor de 'estado' do localStorage
  var imagem = document.querySelector('#img-pacote');
  var valor = document.querySelector('#valor-viagem');
  var botaoviajar = document.querySelector('.comprar-btn')
  // Verifique o valor do estado e faça as alterações correspondentes
  switch(parseInt(estado)) {
      case 1:
           imagem.src = 'https://meupiaui.com/wp-content/uploads/2023/08/Fotos-cidade-noturna-luzes-vibrante-vida-noturna.webp';
            valor.innerHTML = "R$ 1000,00"
          break;
      case 2:
        imagem.src = 'https://forbes.com.br/wp-content/uploads/2023/06/Singapura.jpg';
        valor.innerHTML = "R$ 2000,00"
          break;
      case 3:
        imagem.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4b0gOHUhBRNcDMeOnxF-Rhch-pOgA200i5w&s';
        valor.innerHTML = "R$ 3000,00"
          break;
      case 4:
        imagem.src = 'https://casanadisney.com.br/wp-content/uploads/2022/09/onde-fica-a-cidade-de-orlando-casa-na-disney.jpg';
        valor.innerHTML = "R$ 4000,00"
          break;
      case 5:
        imagem.src = 'https://tonadri.com.br/storage/post/UnOxe77vQsqjOPHEbBLESp7yqiNHK3DECF619CSN.jpeg';
        valor.innerHTML = "R$ 5000,00"
          break;
      case 6:
        imagem.src = 'https://aai.ufba.br/sites/aai.ufba.br/files/saltur.png';
        valor.innerHTML = "R$ 6000,00"
          break;
      default:
          alert("Estado inválido");
          break;
  }

  if (botaoviajar) {
    botaoviajar.addEventListener("click", function() {
        window.location.href = 'auth/selection.html';
    });
}
}

window.onload = verificarEstado;  // Chama a função ao carregar a página
